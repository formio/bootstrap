'use strict';

var assert = require('assert');
var Yadda = require('yadda');
var English = Yadda.localisation.English;
var request = require('request');
var chance = (new require('chance'))();
var _ = require('lodash');

module.exports = function(config) {
  // Global timeout for wait* commands.
  var timeout = 10000;
  var state = {};
  var projects = {};

  /**
   * Wrap the string function for usernames.
   *
   * @param options
   * @returns {*}
   */
  chance.username = function(options) {
    options = options || {};
    _.extend(options, {
      length: chance.natural({min: 5, max: 20}),
      pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    });
    return this.string(options).toLowerCase();
  };

  /**
   * Wrap the string function for passwords.
   * @param options
   * @returns {*}
   */
  chance.password = function(options) {
    options = options || {};
    _.extend(options, {
      length: chance.natural({min: 5, max: 20})
    });
    return this.string(options);
  };

  /**
   * Generate a random string of the given type, for use in the tests.
   *
   * @param {String} type
   */
  var random = function(type) {
    switch (type) {
      case 'fullName' :
        return chance.name();
      case 'name':
      case 'username':
        return chance.username().toLowerCase();
      case 'email':
        return chance.email();
      case 'password':
        return chance.password();
      case 'title':
        return chance.word({length: chance.natural({min: 5, max: 40})});
      case 'description':
        return chance.sentence();
      default:
        return '';
    }
  };

  /**
   * Update an object in the state cache using its cache key, and a key/value pair.
   *
   * @param {String} cacheKey
   *   The key used for state.
   * @param {String} oldKey
   *   The key used for access with the object stored at state[cacheKey]
   * @param {String} newValue
   *   The value to set at oldKey, e.g.: state[cacheKey].oldKey = newValue;
   *
   * @returns {boolean}
   *   If the cache key was updated or not.
   */
  var update = function(cacheKey, oldKey, newValue) {
    // Attempt to get cached values.
    if (_.has(state, cacheKey)) {
      // Get the object at the old cache key.
      var temp = _.get(state, cacheKey);

      // Store the old value for future comparisons.
      var _old = oldKey + '_old';
      _.set(temp, _old, _.get(temp, oldKey));

      // Update the value for the old key in the temp cache object.
      _.set(temp, oldKey, newValue);
      // Update the object stored at the cacheKey.
      _.set(state, cacheKey, temp);

      return true;
    }

    return false;
  };

  /**
   * Attempt to translate the text using the state cache.
   *
   * @param {String} text
   *   The text string to translate.
   *
   * @returns {*}
   */
  var replacements = function(text) {
    if (text === '${empty}') {
      return '';
    }

    // Regex to find ${string}.
    var regex = /\$\{(.+?[^\}])\}/g;

    // Regex to find ${random-*} strings.
    var randomRegex = /random-(.*)/;
    var randomAssignRegex = /random-(.*)>.*/;
    var randomAssignKeyRegex = /random-.*>(.*)/;

    // Regex to find ${key.value}
    var searchRegex = /(.*)\.(.*)/;

    text = text.replace(regex, function(match, str) {
      // If this is a request for a random string and store, get a random string and store it at #key.
      if (randomAssignRegex.test(str)) {
        var type = randomAssignRegex.exec(str).pop();
        var parts = (randomAssignKeyRegex.exec(str).pop()).split('.');
        var cacheKey = parts[0];
        var key = parts[1];
        var value = random(type);

        // Force the cache key to exist so its always inserted.
        state[cacheKey] = state[cacheKey] || {};

        update(cacheKey, key, value);
        return value;
      }

      // Ig this is just a request for a random string.
      if (randomRegex.test(str)) {
        return random(randomRegex.exec(str).pop());
      }

      // Attempt to get cached values.
      if (searchRegex.test(str)) {
        var parts = searchRegex.exec(str);
        parts.shift(); // remove original string
        var key = parts.shift();
        var property = parts.pop();

        if (_.has(state, [key, property])) {
          return _.get(state, [key, property]);
        }
      }

      return '';
    });

    return text;
  };

  /**
   * Handles the response from a request. Will set the localStorage token if available in the header.
   *
   * @param driver
   * @param err
   * @param response
   * @param body
   * @param next
   * @returns {*}
   */
  var handleResponse = function(driver, err, response, body, next) {
    if (err) {
      return next(err);
    }

    var token = response.headers['x-jwt-token'] || '';
    driver.localStorage('DELETE')
      .localStorage('POST', {key: 'formioToken', value: token})
      .then(function() {
        if (typeof body === 'string') {
          try {
            body = JSON.parse(body);
          }
          catch(e) {}
        }

        next(null, body);
      })
      .catch(next);
  };

  /**
   * Util function to authenticate a user against the given project and form with the email and password.
   *
   * @param driver
   * @param projectName
   * @param formName
   * @param email
   * @param password
   * @param next
   */
  var authUser = function(driver, projectName, formName, email, password, next) {
    request({
      rejectUnauthorized: false,
      uri: config.serverProtocol + '://' + projectName + '.' + config.serverHost + '/' + formName + '/submission',
      method: 'POST',
      form: {
        data: {
          'email': email,
          'password': password
        }
      }
    }, function(err, response, body) {
      handleResponse(driver, err, response, body, next);
    });
  };

  /**
   * Util function to create a user against the given project and form with the email and password.
   *
   * @param driver
   * @param projectName
   * @param formName
   * @param username
   * @param email
   * @param password
   * @param next
   */
  var createUser = function(driver, projectName, formName, username, email, password, next) {
    request({
      rejectUnauthorized: false,
      uri: config.serverProtocol + '://' + projectName + '.' + config.serverHost + '/' + formName + '/submission',
      method: 'POST',
      form: {
        data: {
          'email': email,
          'name': username,
          'password': password,
          'verifyPassword': password
        }
      }
    }, function(err, response, body) {
      handleResponse(driver, err, response, body, next);
    });
  };

  /**
   * Util function to create and authenticate a user against the given project and form with the email and password.
   *
   * @param driver
   * @param username
   * @param email
   * @param password
   * @param next
   */
  var createAndAuthUser = function(driver, username, email, password, next) {
    createUser(driver, 'formio', 'user/register', username, email, password, function(err, user) {
      if (err) {
        return next(err);
      }

      authUser(driver, 'formio', 'user/login', email, password, function(err, res) {
        if (err) {
          return next(err);
        }
        if (!res) {
          return next(new Error('Authentication Failed.'));
        }

        next(null, res);
      });
    });
  };

  /**
   * Create a project via the api with the given title and description for the current user.
   *
   * @param driver
   * @param title
   * @param description
   * @param next
   */
  var createProject = function(driver, title, description, next) {
    driver.localStorage('GET', 'formioToken', function(err, res) {
      if (err) {
        return next(err);
      }
      if (!res || !res.value) {
        return next('Not Authenticated!');
      }

      request({
        rejectUnauthorized: false,
        uri: config.serverProtocol + '://api.' + config.serverHost + '/project',
        method: 'POST',
        form: {
          title: title,
          description: description
        },
        headers: {
          'x-jwt-token': res.value
        }
      }, function(err, response, body) {
        handleResponse(driver, err, response, body, function(err, result) {
          if (err) {
            next(err);
          }
          // Save the project
          projects[title] = result;
          next(null, result);
        });
      });
    })
    .catch(next);
  };

  /**
   * Get a project from the temporary cache.
   */
  var getProject = function(title, next) {
    if (!projects[title]) {
      next('Project not found');
    }
    next(null, projects[title]);
  }

  var library = English.library()
    .given('I am (?:on|at) (?:the )?(.+?)(?: page)?$', function(url, next) {
      var path = (url === 'home') ? config.baseUrl + '/' : config.baseUrl + url;

      var driver = this.driver;
      driver.url(path)
        .then(function() {
          next();
        })
        .catch(next);
    })
    .given('I am (?:on|at) (?:the )?$TITLE project overview page', function(title, next) {
      title = replacements(title);
      var driver = this.driver;
      getProject(title, function(err, project) {
        var path = config.baseUrl + '/#/project/' + project._id + '/overview';
        driver.url(path)
          .then(function() {
            next();
          })
          .catch(next);
      });
    })
    .given('an account exists with the username $USERNAME, email $EMAIL and password $PASSWORD', function(username, email, password, next) {
      username = replacements(username);
      email = replacements(email);
      password = replacements(password);

      var driver = this.driver;
      authUser(driver, 'formio', 'user/login', email, password, function(err, res) {
        if (err || res === 'User or password was incorrect') {
          // User doesn't exist. Create it.
          return createUser(driver, 'formio', 'user/register', username, email, password, next);
        }

        // User already exists. Do nothing.
        next();
      });
    })
    .given('I am logged out', function(next) {
      var driver = this.driver;
      driver.localStorage('DELETE', 'formioToken')
        .then(function() {
          return driver.localStorage('DELETE', 'formioUser');
        })
        .then(driver.refresh)
        .then(function() {
          next();
        })
        .catch(next);
    })
    .given('I am logged in(?: for )?(.+)?$', function(tempUser, next) {
      if (!next && tempUser) {
        next = tempUser;
        tempUser = null;
      }

      var driver = this.driver;
      if (tempUser && state[tempUser]) {
        authUser(driver, 'formio', 'user/login', state[tempUser].email, state[tempUser].password, function(err, res) {
          if (err) {
            return next(err);
          }
          if (!res) {
            return next(new Error('Authentication Failed.'));
          }

          next();
        });
      }
      else {
        state[tempUser] = {};
        state[tempUser].fullName = chance.name();
        state[tempUser].name = chance.username();
        state[tempUser].email = chance.email();
        state[tempUser].password = chance.word({length: 10});
        createAndAuthUser(driver, state[tempUser].name, state[tempUser].email, state[tempUser].password, function(err, res) {
          if (err) {
            return next(err);
          }

          next();
        });
      }
    })
    .given('I am logged in as $EMAIL with password $PASSWORD', function(email, password, next) {
      var driver = this.driver;
      authUser(driver, 'formio', 'user/login', email, password, function(err, res) {
        if (err) {
          return next(err);
        }
        if (!res) {
          return next(new Error('Authentication Failed.'));
        }

        next();
      });
    })
    .given('A project exists with the $title and $description', function(title, description, next) {
      title = replacements(title);
      description = replacements(description);

      var driver = this.driver;
      createProject(driver, title, description, function(err, res) {
        if (err) {
          return next(err);
        }

        next(null, res);
      });
    })
    .when('I click (?:on )?the $LINK link', function(link, next) {
      var driver = this.driver;
      driver.waitForExist('=' + link, timeout)
        .click('=' + link)
        .then(function() {
          next();
        })
        .catch(next);
    })
    .when('I click (?:on )?the $BUTTON button', function(button, next) {
      var driver = this.driver;
      driver.waitForExist('//button[contains(.,\'' + button + '\')]', timeout)
        .click('//button[contains(.,\'' + button + '\')]')
        .then(next)
        .catch(next);
    })
    .when('I click on the $element element', function(element, next) {
      var driver = this.driver;
      driver.waitForExist(element, timeout)
        .waitForVisible(element, timeout)
        .click(element)
        .then(next)
        .catch(next);
    })
    .when('I update the project to the $plan', function(plan, next) {
      var driver = this.driver;
      driver.waitForExist('//*[contains(@class, "selected-plan")]//h3', timeout)
        .waitForVisible('//*[contains(@class, "selected-plan")]//h3', timeout)
        .click('//*[contains(@class, "selected-plan")]//h3')
        .waitForVisible('//*[contains(@class, "plan-menu")]//*[text()="' + plan + '"]', timeout)
        .click('//*[contains(@class, "plan-menu")]//*[text()="' + plan + '"]')
        .then(next)
        .catch(next);
    })
    .when('I select $text in $element', function(text, element, next) {
      var xpath = element.indexOf('#') !== -1
        ? '//*[@id="' + (element.split('#'))[1] + '"]'
        : '//*[contains(@class, "' + element + '")]';

      var driver = this.driver;
      driver.waitForExist(element, timeout)
        .waitForVisible(xpath, timeout)
        .click(xpath)
        .waitForVisible(xpath + '//*[text()="' + text + '"]', timeout)
        .click(xpath + '//*[text()="' + text + '"]')
        .then(next)
        .catch(next);
    })
    .when('I enter $TEXT in the $FIELD field', function(text, field, next) {
      var driver = this.driver;
      driver.waitForExist(field, timeout)
        .setValue(field, replacements(text))
        .then(next)
        .catch(next);
    })
    .when('I expand the user menu', function(next) {
      var driver = this.driver;
      driver.waitForExist('#user-menu')
        .click('#user-menu')
        .then(next)
        .catch(next);
    })
    .when('I wait $TIME milliseconds', function(time, next) {
      var driver = this.driver;
      driver.pause(time)
        .then(next)
        .catch(next);
    })
    .then('the title is $TITLE', function(title, next) {
      var driver = this.driver;
      driver.getTitle()
        .then(function(res) {
          try {
            assert.equal(res, title);
            next();
          }
          catch(err) {
            next(err);
          }
        })
        .catch(next);
    })
    .then('I am (?:on|at) (?:the )?(.+?)(?: page)$', function(path, next) {
      path = (path === 'home') ? config.baseUrl + '/' : config.baseUrl + path;

      var driver = this.driver;
      driver.url()
        .then(function(res) {
          assert.equal(res.value, path);
          next();
        })
        .catch(next);
    })
    .then('I am on the $title project portal', function(title, next) {
      title = replacements(title);

      var driver = this.driver;
      driver.waitForExist('.project-title')
        .getText('.project-title')
        .then(function(found) {
          assert.equal(found, title);
          next();
        })
        .catch(next);
    })
    .then('I have been logged in', function(next) {
      var driver = this.driver;
      var tries = 0;

      (function attempt() {
        if (tries > 15) {
          return next(new Error('No formioToken found.'));
        }

        driver.pause(50)
          .localStorage('GET', 'formioToken', function(err, res) {
            if (err) {
              return next(err);
            }
            if (res.value) {
              return next();
            }

            tries += 1;
            attempt();
          })
          .catch(next);
      })();
    })
    .then('I have been logged out', function(next) {
      var driver = this.driver;
      var _old = {};
      var tries = 0;

      (function attempt() {
        if (tries > 15) {
          return next(new Error('User still logged in: ' + JSON.stringify(_old)));
        }

        driver.pause(50)
          .localStorage('GET', 'formioToken', function(err, res) {
            if (err) {
              return next(err);
            }
            if (!res.value) {
              return next();
            }

            _old = res.value;
            tries += 1;
            attempt();
          })
          .catch(next);
      })();
    })
    .then('I see a notification with (?:the text )?$TEXT', function(text, next) {
      text = replacements(text);

      var driver = this.driver;
      driver.waitForExist('//div[@class=\'toast-message\']', timeout)
        .getText('//div[@class=\'toast-message\']')
        .then(function(alert) {
          assert.equal(text, alert);
          next();
        })
        .catch(next);
    })
    .then('A help block shows with the text $text', function(text, next) {
      text = replacements(text);

      var driver = this.driver;
      driver.waitForVisible('//*[contains(@class, \'help-block\') and contains(., \'' + text + '\')]', timeout)
        .getText('//*[contains(@class, \'help-block\') and contains(., \'' + text + '\')]')
        .then(function(alert) {
          assert.equal(text, alert);
          next();
        })
        .catch(next);
    })
    .then('I see the plaintext $text', function(text, next) {
      text = replacements(text);

      var driver = this.driver;
      driver.waitForExist('//*[text()=\'' + text + '\']', timeout)
        .isVisible('//*[text()=\'' + text + '\']')
        .then(function(visible) {
          assert.equal(visible, true);
          next();
        })
        .catch(next);
    })
    .then('I see $TEXT', function(text, next) {
      text = replacements(text);

      var driver = this.driver;
      driver.waitForExist('//*[*=\'' + text + '\']', timeout)
        .isVisible('//*[*=\'' + text + '\']')
        .then(function(visible) {
          if (!(visible instanceof Array)) {
            visible = [visible];
          }

          assert.equal(_.any(visible), true);
          next();
        })
        .catch(next);
    })
    .then('I see an input $element with the value $value', function(element, value, next) {
      value = replacements(value);

      var driver = this.driver;
      driver.waitForExist(element, timeout)
        .isVisible(element)
        .then(function(visible) {
          if (!(visible instanceof Array)) {
            visible = [visible];
          }

          assert(_.any(visible));
        })
        .getValue(element)
        .then(function(found) {
          assert.equal(found, value);
          next();
        })
        .catch(next);
    })
    .then('I see $element with the text $text', function(element, text, next) {
      text = replacements(text);

      var driver = this.driver;
      driver.waitForExist(element, timeout)
        .isVisible(element)
        .then(function(visible) {
          if (!(visible instanceof Array)) {
            visible = [visible];
          }

          assert(_.any(visible));
        })
        .getText(element)
        .then(function(found) {
          try {
            assert.equal(found, text);
            return next();
          }
          catch(e) {}

          assert(_.startsWith(found, text) || _.endsWith(found, text));

          next();
        })
        .catch(next);
    })
    .then('the $BUTTON button is disabled', function(button, next) {
      var driver = this.driver;
      driver.waitForExist('//button[text()=\'' + button + '\']', timeout)
        .isEnabled('//button[text()=\'' + button + '\']')
        .then(function(enabled) {
          assert(!enabled);
          next();
        })
        .catch(next);
    })
    .then('the user account for $user was updated with $new for $old', function(user, newValue, oldKey, next) {
      if (!user || !newValue || !oldKey) {
        return next('Wrong values given for: user|newValue|oldKey');
      }

      // Attempt to translate the given new value.
      user = user.toString();
      // If testing for a new random value
      if (newValue === '${random}') {
        // Confirm the current key has an old value.
        assert.equal(_.has(state, user + '.' + oldKey + '_old'), true);
        // Confirm the current keys old value is different from the current value.
        assert.notEqual(_.get(state, user + '.' + oldKey + '_old'), _.get(state, user + '.' + oldKey));
        return next();
      }
      else {
        newValue = replacements(newValue);
      }

      // Update the value and continue.
      update(user, oldKey, newValue);
      next();
    })
    .then('the user profile for $user was changed', function(user, next) {
      var _fullName = user.toString() + '.fullName';
      var _name = user.toString() + '.name';
      var _email = user.toString() + '.email';
      var _password = user.toString() + '.password';
      var fullName = replacements('${' + _fullName + '}');
      var name = replacements('${' + _name + '}');
      var email = replacements('${' + _email + '}');
      var password = replacements('${' + _password + '}');

      var driver = this.driver;
      authUser(driver, 'formio', 'user/login', email, password, function(err, res) {
        if (err) {
          return next(err);
        }
        if (!res) {
          return next(new Error('Authentication Failed.'));
        }

        assert.equal(_.get(res, 'data.fullName'), fullName);
        assert.equal(_.get(res, 'data.name'), name);
        assert.equal(_.get(res, 'data.email'), email);

        // Compare old values if present.
        [
          {current: fullName, label: _fullName},
          {current: name, label: _name},
          {current: email, label: _email},
          {current: password, label: _password}
        ].forEach(function(element) {
          if (_.has(state, element.label + '_old')) {
            assert.notEqual(element.current, _.get(state, element.label + '_old'));
          }
        });

        next(null, res);
      });
    })
    .then('I see the $element modal', function(element, next) {
      var driver = this.driver;
      driver.waitForVisible(element, timeout)
        .then(function() {
          return next();
        })
        .catch(next);
    });

  return library;
};
