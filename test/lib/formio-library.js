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
   var helpPage = 'http://formio.github.io/help.form.io';
  var helpformio = 'https://help.form.io';

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
        if (err || res === 'Invalid user') {
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

    .given('I am on $url help page', function (url, next) {

      var path = helpPage + url;

      var driver = this.driver;
      driver.url(path)
        .then(function () {
          next();
        })
        .catch(next);
    }) //Padma (working in support page)
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

     .when('I click the $text link in Resources section', function (text, next) {
      var driver = this.driver;
      driver.waitForExist('//a[contains(@ng-repeat,"resource in forms")and contains (text(),"'+text+'") ]', timeout)
        .waitForVisible('//a[contains(@ng-repeat,"resource in forms")and contains (text(),"'+text+'")]', timeout)
        .isVisible('//a[contains(@ng-repeat,"resource in forms")and contains (text(),"'+text+'") ]')
        .click('//a[contains(@ng-repeat,"resource in forms")and contains (text(),"'+text+'") ]')
        .then(function(){
            next();
        })
        .catch(next);
    }) //Padma (user link for test12)

    
 .when('I click on the icon $icon', function (icon, next) {
       var driver = this.driver;
       driver.waitForExist('//*[contains(@class,\'' + icon + '\')]', timeout)
         .waitForVisible('//*[contains(@class,\'' + icon + '\')]', timeout)
         .click('//*[contains(@class,\'' + icon + '\')]', timeout)
         .then(next)
         .catch(next);
     })//surendra

   .when('I click on the playicon', function (next) {
       var driver = this.driver;
       driver.frame(0)
          .then(function(res){
            driver.waitForExist('//button[contains(@title,"Play")]',timeout)
            .click('//button[contains(@title,"Play")]',timeout)
            .pause(1000)
            next();
            })
          
         .catch(next);
     })//padma


 .when('I see that the video is playing', function (next) {
       var driver = this.driver;
       console.log("video test");
       driver.frame(0)
          .then(function(res){
            console.log("test2");
            driver.waitForExist('//button[contains(@title,"Pause")]',timeout)
          
.pause(1000)
            next();
            })
          
         .catch(next);
     })//padma
  /* .then('I see video is playing',function(next){
      var driver = this.driver;
      driver.frame(0)
        .then(function(res){
          console.log(res);
           driver.waitForExist('//button[contains(@title,"Pause")]',timeout)
            .then(function(res){
            assert.equal(res,true);
            next();
        })

        .catch(next);
   })   //Padma */

    .when('I click on the $button with $link', function (button,link, next) {
       var driver = this.driver;
       driver.waitForExist('//a[contains(@class,"btn btn-default btn-block btn-lg") and contains(@href,"'+link+'")]', timeout)
         .waitForVisible('//a[contains(@class,"btn btn-default btn-block btn-lg") and contains(@href,"'+link+'")]', timeout)
         .click('//a[contains(@class,"btn btn-default btn-block btn-lg") and contains(@href,"'+link+'")]', timeout)
         .then(next)
         .catch(next);
     }) //Padma

  /*  .when('I am (?:on|at) (?:the )?(.+?)(?: page)?$', function(url, next) {
      var path = (url === 'home') ? config.baseUrl + '/' : config.baseUrl + url;

      var driver = this.driver;
      driver.url(path)
        .then(function() {
          next();
        })
        .catch(next);
    }) //Padma (working) */
    .when('I click (?:on )?the $BUTTON button', function(button, next) {
      var driver = this.driver;
      driver.waitForExist('//button[contains(.,\'' + button + '\')]', timeout)
        .click('//button[contains(.,\'' + button + '\')]')
        .then(next)
        .catch(next);
    })
    .when('I drag and drop $title component', function(title, next) {
      var driver = this.driver;
      console.log("test")
      driver.dragAndDrop('//div[contains(@id,"accordiongroup")]//span[contains(@title,"'+title+'")]', '//div[contains(@class,"alert")]', next)
      .catch(next);
    }) //Padma

    .then('I see $TEXT in the $FIELD field', function (text, field, next) {
        var driver = this.driver;
        driver.waitForExist(field, timeout)
          .getValue(field)
          .then(function (temp) {
            assert.equal(temp,replacements(text))
            next();
          })
          .catch(next);
      })//surendra//to check text in the autopopulated field

      .when('I click (?:on )?the $BUTTON input button', function (button, next) {
       var driver = this.driver;
       driver.waitForExist('//input[contains(@value,\'' + button + '\')]', timeout)
         .click('//input[contains(@value,\'' + button + '\')]')
         .then(next)
         .catch(next);
     })//surendra

     .then('I see element with the $value value', function (value, next) {
       var driver = this.driver;
       driver.waitForExist('//*[contains(@value,\'' + value + '\')]', timeout)
         .isVisible('//*[contains(@value,\'' + value + '\')]', timeout)
         .then(function (temp) {
           if (typeof(temp) == 'object') {
             assert.equal(temp[0], true);
           } else {
             assert.equal(temp, true);
           }
           next();
         })
         .catch(next);
     })//surendra

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

      .when('I click on the image with source $text', function(text, next) {
      var driver = this.driver;
      driver.waitForExist('//img[contains(@src, \'' + text + '\')]', timeout)
        .waitForVisible('//img[contains(@src, \'' + text + '\')]', timeout)
        .click('//div//img[contains(@src, \'' + text + '\')]', timeout)
        .then(next)
        .catch(next);
    }) // surendra
    .when('I enter $TEXT in the $FIELD field', function(text, field, next) {
      var driver = this.driver;
      driver.waitForExist(field, timeout)
        .setValue(field, replacements(text))
        .then(next)
        .catch(next);
    })

     .when('I enter $TEXT in the Expiry field', function(text,next) {
      var driver = this.driver;
      text = replacements(text);
      var xpath = '//input[contains(@placeholder, "YY")]';
      console.log("test")
      driver.waitForExist(xpath, timeout)
        .then(function(){
          console.log(res);
        
        })
        .click(xpath)
        .setValue(xpath, replacements(text))
           .then(function(res) {
          console.log(res);
          next();
        })
        .catch(next);
    }) //Padma (Not working)
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

    .then('I donot see $Resourcename resource', function (resourcename, next) {
        var driver = this.driver;
        var path = '//*[contains(@class , "form-list")]//li//h4';
        driver.getText(path, timeout)
          .then(function(temp){
            
            var res = temp.indexOf(resourcename) != -1  ? true : false;
            assert.equal(res,false);
            next();
          })
          .catch(next);
      })//surendra

          .then('I donot see $Resourcename form', function (resourcename, next) {
        var driver = this.driver;
        var path = '//*[contains(@class , "form-list")]//li//h4';
        driver.getText(path, timeout)
          .then(function(temp){
      
            var res = temp.indexOf(resourcename) == -1  ? true : false;
            assert.equal(res,true);
            next();
          })
          .catch(next);
      })//surendra

     .then('I donot see any $text forms', function (text,next) {
        var driver = this.driver;
        var path = '//h2[text()=\''+text+'\']//..//*[contains(@class , "form-list")]//ul';
        driver.getText(path, timeout)
          .then(function(temp){
            assert.equal(temp,"");
            next();
          })
          .catch(next);
      })//surendra

       .then('I see Anonymous roles for User Login form', function (next) {
        var driver = this.driver;
        var path = '//span [contains(text(), "Anonymous")]';
        driver.waitForExist(path,timeout)
        .getText(path, timeout)
          .then(function(temp){
           if (temp[0]==temp[1]){
            assert.equal(temp[0],"Anonymous");
            next();
           }
          })
          .catch(next);
      })//Padma (working)

      .then('I see the $component component',function(component, next){
      var driver = this.driver;
      driver.waitForExist('//label[contains(text(),\''+component+'\')]',timeout)
        .isVisible('//label[contains(text(),\''+component+'\')]',timeout)
        .then(function(temp){
          assert(temp,true);
          next();
        })
        .catch(next);
    })//surendra

      

      .then('I see the submissions datagrid',function( next){
      var driver = this.driver;
      driver.waitForExist('//div[contains(@kendo-grid,"grid")]',timeout)
        .isVisible('//div[contains(@kendo-grid,"grid")]',timeout)
        .then(function(temp){
          assert(temp,true);
          next();
        })
        .catch(next);
    })//Padma

     .then('I see the $action action',function(action, next){
      var driver = this.driver;
        driver.waitForExist('//tr[contains(@data-ng-repeat,"action in actions")]//..//a[contains(text(),"'+action+'")]',timeout)
       .isVisible('//tr[contains(@data-ng-repeat,"action in actions")]//..//a[contains(text(),"'+action+'")]',timeout)
        .then(function(temp){
          assert.equal(temp,true);
          next();
        })
        .catch(next);
    })//Padma
       
    /*.when('I click on $button button for $formname form', function (button, formname, next) {
        var driver = this.driver;
        var path = '//div[contains(@class,\'form-list\')]//a' +
          '//h4[contains(text(),\'' + formname + '\')]//..//..//..//a[contains(text(),\'' + button + '\')]';
        driver.waitForExist(path, timeout)
          .click(path, timeout)
          .then(next)
          .catch(next);
      })//surendra */

    .then('I am on the $page page of $text project', function (page, text, next) {
        var driver = this.driver;
        driver.url()
          .then(function (res) {
            var path = res.value.split("/");
            var x = (path[path.length - 1] + '*') == "*" ? path[path.length - 2] : path[path.length - 1];
            assert.equal(x, page);
          
          }).waitForVisible('//*[contains(@class, "project-title")]//a[contains(text(),\'' + replacements(text) + '\')]', timeout)
          .isVisible('//*[contains(@class, "project-title")]//a[contains(text(),\'' + replacements(text) + '\')]')
          .then(function (alert) {
            assert.equal(alert, true);
            next();
          })
          .catch(next);
      })//surendra


      .then('I see ApiEndpoint', function (next) {
        var driver = this.driver;
        driver.waitForExist('//h5[contains(@class,"ellipsis ng-binding")]', timeout)
          .getText('//h5[contains(@class,"ellipsis ng-binding")]')
          .then(function (res) {
            console.log(res);
			var path = res.split("//");
			var x = path[path.length - 1];
			console.log(x);
			var y = x.split(".");
			var api = y[0];
			console.log(api);
			
            next();
          })
          .catch(next);
      }) //Padma (working)

.then('I see $file is downloaded on my computer', function (file,next) {
        var driver = this.driver;
		
		driver.click('//*[contains(@class,"fa fa-home")]', timeout)
		.then(function(temp){
          console.log(temp);
          driver.waitForExist('//strong[contains(@class,"ng-binding")]',timeout)
          .then(function (alert) {
            console.log(alert);
            driver.getText('//strong[contains(@class,"ng-binding")]')
            .then(function(api){
            console.log(api);
            var filepath = 'file:///C:/Users/Paddy/Downloads/'+api+'.json';
            console.log(filepath);
            driver.pullFileFromDevice(filepath)
           .then(function(temp){
          console.log(temp);
        
          next();
        })
        })
          })
        })
        .catch(next);
    })//Padma (trial)


    /*  .then('I donot see any form', function (next) {
        var driver = this.driver;
        var path = '//*[contains(@class , "form-list")]//ul';
        driver.getText(path, timeout)
          .then(function(temp){
            assert.equal(temp,"");
            next();
          })
          .catch(next);
      })//surendra */
      .when('I clear the $element field',function(element,next){
     var driver = this.driver;
     driver.waitForExist(element, timeout)
       .setValue(element, replacements(""))
       .then(next)
       .catch(next);
   })//surendra

      .then('I do not see $element with the text $text', function (element, text, next) {
      text = replacements(text);
      var driver = this.driver;
      driver.waitForExist(element, timeout)
        .isVisible(element)
        .then(function (visible) {
          if (!(visible instanceof Array)) {
            visible = [visible];
          }

          assert(_.any(visible));
        })
        .getText(element)
        .then(function (found) {
          try {
            assert.notEqual(found, text);
            return next();
          }
          catch (e) { }

          assert(_.startsWith(found, text) || _.endsWith(found, text));

          next();
        })
        .catch(next);
    }) //Padma (Working)

      .then('I am on $text page', function(text,next) {
      var driver = this.driver;
      driver.waitForExist('//span[contains(@class, "form-title")]', timeout)
        .isVisible('//span[contains(@class, "form-title")]')
	      .getText('//span[contains(@class, "form-title")]')
        .then(function(found) {
            assert.equal(found, text);
            next();
        })
        .catch(next);
    }) // Padma (Working)

  .then('I am taken to $text page', function(text,next){
      var driver = this.driver;
      var path = '//div//h2[contains(text(),"'+text+'")]';
      driver.waitForExist(path,timeout)
      .isVisible(path,timeout)
      .getText(path)
      .then(function(res){
        assert.equal(res[1],text);
        next();
      })
       .catch(next);
  }) //Padma (working)


  .then('I see $text form', function(text,next){
      var driver = this.driver;
      var path = '//div//h4[contains(text(),"'+text+'")]';
      driver.waitForExist(path,timeout)
      .isVisible(path,timeout)
      .getText(path)
      .then(function(res){
      
        assert.equal(res,text);
        next();
      })
       .catch(next);
  }) //Padma (working)

  /*.then('I see the $action action ', function (action next) {
      var driver = this.driver;
	 	  driver.waitForExist('//span[contains(text(),"'+form+'")]',timeout)
      .isVisible(path,timeout)
      .getText(path)
      .then(function(res){
        console.log("test1");
        console.log(res);
        assert.equal(res,text);
      })
       console.log("test2");
      driver.waitForExist('//tr[contains(@data-ng-repeat,"action in actions")]',timeout)
        .getText('//a[contains(@ng-if,"action._id")]')
        .then(function(res){
           console.log("test3");
          console.log(res+"^^^^^^^");
		assert.equal(res,Action);
          next();
        })
        .catch(next);
    }) // Padma */

  .then('I see $Resourcename resource', function (resourcename, next) {
        var driver = this.driver;
        var path = '//h4[contains(text(),\'' + resourcename + '\')]';
        driver.waitForExist(path, timeout)
        .isVisible(path, timeout)
        .then(function(){
        next();
      })
          .catch(next);
      })//Padma (working)

     .then('I donot see Welcome banner', function (next) {
        var driver = this.driver;
        var path = '//div[contains(@ng-if,"showWelcome")]';
        driver.waitForExist(path, timeout)
          .then(function(res){
          assert.equal(res,false);
        next();
      })
          .catch(next);
      })//Padma (working)

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
    }) //worked for feedback feature

        .then('I do not see the $element element', function (element, next) {
      var driver = this.driver;
      console.log("test");
      driver.isVisible(element)
      .then(function (vis) {
          console.log('vis:'+ vis);
          assert.equal(vis, false);
          return next();
       })
      .catch(next);
    }) //padma (working for doc test)

    .then('I am on new window with url $link',function(link, next){
     var driver = this.driver;
     driver.windowHandles()
       .then(function (result) {
         driver.window(result.value[result.value.length-1])
           .url()
           .then(function(res){
             assert.equal(res.value,link);
             next();
           })
           
           .window(result.value[0])
       })
       .catch(next);
   }) //(Working)

   .then('I see $msg text',function(msg,next){
     var driver = this.driver;
     console.log("test");
     driver.waitForVisible('//div//h4[contains(text(),"Thank you!")]', timeout)
     .isVisible('//div//h4[contains(text(),"Thank you!")]')
     .then(function (result) {
             console.log(result);
             assert.equal(result,true);
             next();
          })
       .catch(next);
   }) //Padma (Not worked yet thank you msg)

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
     .then('the $BUTTON button is enabled', function (button, next) {
      var driver = this.driver;
      driver.waitForExist('//button[text()=\'' + button + '\']', timeout)
        .isEnabled('//button[text()=\'' + button + '\']')
        .then(function (enabled) {
          assert(enabled);
          next();
        })
        .catch(next);
    }) //Padma (working in support request)
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
      .then('I see the $element element', function (element, next) {
      var driver = this.driver;
      driver.waitForVisible(element, timeout)
        .then(function () {
          return next();
        })
        .catch(next);
    }) // Padma

 .then('I see project progress is at $title', function (title, next) {
      title = replacements(title);

      var driver = this.driver;
      driver.waitForExist('.overlay')
        .getText('.overlay')
        .then(function (found) {
          assert.equal(found, title);
          next();
        })
        .catch(next);
    }) // Padma

.then('I see the $text link in Roles section', function (text, next) {
      var driver = this.driver;
      driver.waitForExist('//a[contains(@ng-repeat,"role in currentProjectRoles")and contains (text(),"'+text+'") ]', timeout)
        .waitForVisible('//a[contains(@ng-repeat,"role in currentProjectRoles")and contains (text(),"'+text+'")]', timeout)
        .isVisible('//a[contains(@ng-repeat,"role in currentProjectRoles")and contains (text(),"'+text+'") ]')
        .then(function(res){
          assert.equal(res,true);
          next();
        })
        .catch(next);
    }) //Padma


.then('I do not see the $text link in Roles section', function (text, next) {
      var driver = this.driver;
      driver.waitForExist('//div//h5[contains(text(),\'Roles\')]',timeout)
        .getText('//div//h5[contains(text(),\'Roles\')]//..//..//a')
        .then(function(res){
          var temp = res.indexOf(text) > -1 ? true : false;
          assert.equal(temp, false);
          next();
        })
        .catch(next);
    }) //Padma (working)

    .then('I do not see the $text link in Resources section', function (text, next) {
      var driver = this.driver;
      driver.waitForExist('//div//h5[contains(text(),\'Resources\')]',timeout)
        .getText('//div//h5[contains(text(),\'Resources\')]//..//..//a')
        .then(function(res){
          var temp = res.indexOf(text) > -1 ? true : false;
          assert.equal(temp, false);
          next();
        })
        .catch(next);
    }) //Padma (Not working)

     .then('I do not see the $text link in Forms section', function (text, next) {
      var driver = this.driver;
      driver.waitForExist('//div//h5[contains(text(),\'Forms\')]',timeout)
        .getText('//div//h5[contains(text(),\'Forms\')]//..//..//a')
        .then(function(res){
          console.log(res+"^^^^^^^");
          var temp = res.indexOf(text) > -1 ? true : false;
          assert.equal(temp, false);
          next();
        })
        .catch(next);
    }) //Padma (Not working)

    .when('I click on the $button button for $Resourcename resource', function (button, formname, next) {
        var driver = this.driver;
        var path = '//div//h2[contains(text(),\'Resources\')]//..//div[contains(@class,\'form-list\')]//a' +
          '//h4[contains(text(),\'' + formname + '\')]//..//..//..//*[contains(@class,\'' + button + '\')]';
        driver.waitForExist(path, timeout)
          .click(path, timeout)
          .then(next)
          .catch(next);
      })

        
    .when('I click button with $text text', function(text, next) {
	      text = replacements(text);
        var driver = this.driver;
        driver.waitForExist('//*[contains(@class,"btn btn-primary ng-binding")]', timeout)
        .then(function (res) {
          //console.log('res :'+ res.value);
        
        })
        .click('//*[contains(@class,"btn btn-primary ng-binding")]')
        .then(function (res) {
          //console.log('res :'+ res);
         next();
        })
        .catch(next);
    }) //Padma (modified)

.when('I click on $button button for $formname form', function (button, formname, next) {
        var driver = this.driver;
        var path = '//div//h2[contains(text(),\'Forms\')]//..//div[contains(@class,\'form-list\')]//a' +
          '//h4[contains(text(),\'' + formname + '\')]//..//..//..//*[contains(@class,\'' + button + '\')]';
        driver.waitForExist(path, timeout)
          .click(path, timeout)
          .then(next)
          .catch(next);
      })//surendra 

 

      .when('I click on $text text element', function (text, next) {
        var driver = this.driver;
        var path = '//span[contains(text(),"'+text+'")]';
        driver.waitForExist(path, timeout)
          .click(path, timeout)
          .then(next)
          .catch(next);
      }) //Padma

    .then('I am on the overview page of $text project', function(text,next) {
      var driver = this.driver;
      driver.url()
        .then(function(res) {
          var path = res.value.split("/");
          assert.equal(path[path.length-1], "overview");
          next();
        }).waitForVisible('//*[contains(@class, "project-title")]//a[contains(text(),\'' + text + '\')]', timeout)
        .isVisible('//*[contains(@class, "project-title")]//a[contains(text(),\'' + text + '\')]')
        .then(function(alert) {
          assert.equal(alert, true);
          next();
        })
        .catch(next);
    })

 
     .then('I see the $text link in Resources section', function (text, next) {
      var driver = this.driver;
      driver.waitForExist('//a[contains(@ng-repeat,"resource in forms")and contains (text(),"'+text+'") ]', timeout)
        .waitForVisible('//a[contains(@ng-repeat,"resource in forms")and contains (text(),"'+text+'")]', timeout)
        .isVisible('//a[contains(@ng-repeat,"resource in forms")and contains (text(),"'+text+'") ]')
        .then(function(res){
          assert.equal(res,true);
          next();
        })
        .catch(next);
    }) //Padma


   .then('I see the $text link in Forms section', function (text, next) {
      var driver = this.driver;
      driver.waitForExist('//a[contains(@ng-repeat,"form in forms")and contains (text(),"'+text+'") ]', timeout)
        .waitForVisible('//a[contains(@ng-repeat,"form in forms")and contains (text(),"'+text+'")]', timeout)
        .isVisible('//a[contains(@ng-repeat,"form in forms")and contains (text(),"'+text+'") ]')
        .then(function(res){
          assert.equal(res,true);
          next();
        })
        .catch(next);
    }) //Padma

    .then('I am on the edit page with $text', function(text,next) {
      var driver = this.driver;
      driver.url()
        .then(function(res) {
            var path = res.value.split("/");
            assert.equal(path[path.length-1], "edit");
         })
        .waitForVisible('//legend[contains(@class, "ng-binding")]', timeout)
        .isVisible('//legend[contains(@class, "ng-binding")]')
	      .getText('//legend[contains(@class, "ng-binding")]')
        .then(function(found) {
	          assert.equal(found, text);
            next();
        })
        .catch(next);
    }) // Padma (working)

      .then('I see $title project portal', function (title, next) {
      title = replacements(title);

      var driver = this.driver;
      driver.waitForExist('.project-title')
        .getText('.project-title')
        .then(function (found) {
          assert.equal(found, title);
          next();
        })
        .catch(next);
    }) //Padma

.when('My project count is zero', function(next) {
      var driver = this.driver;
      driver.waitForExist('//*[contains(@ng-if, "projectsLoaded && !projects.length")]', timeout)
        .waitForVisible('//*[contains(@ng-if, "projectsLoaded && !projects.length")]', timeout)
        .then(function(res){
            next();

        })
        .catch(next);
    }) //Padma

  
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
