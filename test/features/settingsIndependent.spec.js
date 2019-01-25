module.exports = function (actions,tags) {
  describe('Independent Plan Settings',function(){
    describe('Independent Plan > Environment Settings',function() {
      actions.logout();
      actions.iAmLoggedInFor('authProfile');
      actions.goToPage('#/');
      // actions.iAmLoggedInFor('profileuser4');
      // actions.goToPage('#/');
      // actions.clickOnClass('#user-menu');
      // actions.clickOnElementWithText(' Payment Info');
      // actions.checkingUrlEndsWith('#/profile/payment/view');
      // actions.clickOnElementWithText('Add Credit Card');
      // actions.enterTextInField('#cardholderName', 'Test');
      // actions.enterTextInField('#ccNumber', '4111111111111111');
      // actions.enterTextInField('#securityCode', '411');
      // actions.clickOnClass('#form-group-ccExpiryMonth');
      // actions.clickOnElementWithText('01');
      // actions.clickOnClass('#form-group-ccExpiryYear');
      // actions.clickOnElementWithText('25');
      // actions.clickOnClass('#submit');
      // actions.waitForActionToComplete(2000);
      // actions.goToPage('#/');
      actions.projectExisting('independentProject', 'This is a test project');
      actions.clickOnElementWithText('independentProject');
      actions.clickOnElementWithText('Trial');
      actions.upgradeToPlan("Independent");
      actions.clickOnButton(' Confirm Billing Change');
      actions.waitForActionToComplete(2000);
      actions.iSeeTextIn("a.project-plan.label-warning", "Independent");
      actions.iSeeText('$25/month');
      actions.checkElementIsDisabled('//*[@id="main-wrapper"]/div[2]/div[2]/div/div/div/div[2]/div[2]/ul[3]/li[2]/div/div[3]/input');
      actions.clickOnElementWithText('Overview');
      actions.checkingUrlEndsWith('/overview');
      actions.iSeeText('Submission Requests');
      actions.iSeeText('0 / 10,000');
      actions.iSeeText('Emails');
      actions.iSeeText('0 / 100');
      actions.clickOnElementWithText('Settings');
      actions.checkElementIsDisabled('//*[@id="form-group-title"]/input');
      actions.checkElementIsNotDisabled('//*[@id="form-group-name"]/div[1]/input');
      actions.enterTextInField('#form-group-name>div.input-group.ng-scope>input', '${random-name>test.name}');
      actions.waitForActionToComplete(1000);
      actions.clickOnElementWithText(' Save Stage');
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText('User Login');
      actions.iSeeTextCount('${test.name}', 2);
      actions.clickOnElementWithText('Resources');
      actions.clickOnElementWithText(' API');
      actions.iSeeTextCount('${test.name}', 4);
    });
    tags('smoke').describe('',function(){
      actions.clickOnElementWithText('Forms');
      actions.checkingUrlEndsWith('/form/');
      actions.clickOnElementWithText(' New Form');
      actions.clickOnElementWithText('API Web Form');
      actions.enterTextInField('#title','Test Form');
      actions.dragTo('Text Field', 'formarea');
      actions.iSeeText('Text Field Component');
      actions.enterTextInField('#label', 'Text Field');
      actions.clickOnElementWithText('Save');
      actions.waitForActionToComplete(1000);
      actions.clickOnElementWithText('Create Form');
    // actions.clickOnClass('.toast-message');
      actions.clickOnElementWithText(' Revisions');
      actions.iSeeText('Upgrade your Project');
      actions.clickOnElementWithText('Settings');
      actions.checkElement('//*[@id="protect"]');
      actions.clickOnElementWithText(' Save Stage');
      actions.iSeeElement('i.fa.fa-shield.ng-scope');
      actions.waitForActionToComplete(2000);
      actions.clickOnElementWithText('Forms');
      actions.checkElementWithTextIsDisabled(' New Form');
      actions.checkElementWithTextIsDisabled(' Edit');
      actions.checkElementWithTextIsDisabled(' Actions');
      actions.checkElementWithTextIsDisabled(' Access');
      actions.checkElementWithTextIsNotDisabled(' Use');
      actions.checkElementWithTextIsNotDisabled(' Embed');
      actions.clickOnElementWithTextIndex(' Use',3);
      // actions.checkElementWithTextIsDisabled(' Edit');
      // actions.checkElementWithTextIsDisabled(' Actions');
      // actions.checkElementWithTextIsDisabled(' Access');
      actions.iSeeText('Submit Form');
      actions.iSeeText('Text Field');
      actions.enterTextInField('#textField','Test Submission');
      actions.clickOnButton('Submit');
      actions.iSeeTextIn(".toast-message",'New submission added!');
      actions.clickOnElementWithText(' Data');
      actions.checkElementWithTextIsNotDisabled('{...} Export JSON');
      actions.checkElementWithTextIsNotDisabled(' Export CSV');
      actions.iSeeText('Test Submission');
      actions.clickOnElementWithText('Test Submission');
      actions.clickOnElementWithTextIndex(' Edit',1);
      actions.checkingUrlEndsWith('/edit');
      actions.enterTextInField('#textField','Updated Submission');
      actions.clickOnButton('Submit');
      actions.checkingUrlEndsWith('/submission');
      actions.iSeeText('Updated Submission');
      actions.clickOnElementWithText('Updated Submission');
      actions.clickOnElementWithText(' Delete');
      actions.iSeeText('Are you sure you want to delete this submission?');
      actions.clickOnElementWithText('Cancel');
      actions.iDonotSeeText('Are you sure you want to delete this submission?');
      actions.iSeeText('Updated Submission');
      actions.clickOnElementWithText(' Delete');
      actions.iSeeText('Are you sure you want to delete this submission?');
      actions.clickOnElementWithText('Delete');
      actions.iDonotSeeText('Updated Submission');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('On-Premise Environment');
      actions.iSeeText('Upgrade your project to a team or commercial plan to enable On-Premise Environments.');
      actions.clickOnElementWithText('API Keys');
      actions.clickOnElementWithText('Add New Key');
      actions.clickOnElementWithText('Add New Key');
      actions.iSeeElement('i.fa.fa-trash');
      actions.pageReload();
      actions.waitForActionToComplete(1000);
      actions.iSeeElement('i.fa.fa-trash');
      actions.enterTextInField('xpath://input','New Key');
      actions.waitForActionToComplete(1000);
      actions.pageReload();
      actions.waitForActionToComplete(1000);
      actions.iSeeValueIn('input','New Key');
      actions.clickOnElementWithText('Add New Key');
      actions.iSeeValueInIndex('input','Key 2',1);
      actions.clickOnClass('.fa.fa-trash');
      actions.iDonotSeeText('New Key');
      actions.clickOnElementWithText('CORS');
      actions.iSeeText('Upgrade your project to a paid plan to enable CORS Settings.');
      actions.clickOnElementWithText('Security');
      actions.iSeeText('Upgrade your project to a paid plan to enable security settings.');
      actions.clickOnElementWithText('Custom JS and CSS');
      actions.checkingUrlEndsWith('/env/settings/customjscss');
      // actions.enterTextInField('#custom-css','Test CSS');
      // actions.enterTextInField('#custom-js','Test JS');
      // actions.clickOnElementWithText('Save Settings');
      // actions.clickOnClass('.toast-message');
      // actions.pageReload();
      // actions.waitForActionToComplete(5000);
      // actions.acceptAlert();
      // actions.checkingUrlEndsWith('/env/settings/customjscss');
      // actions.enterTextInField('#custom-css','');
      // actions.enterTextInField('#custom-js','');
      // actions.clickOnElementWithText('Save Settings');
      // actions.clickOnClass('.toast-message');
    });
    tags('smoke').describe('Independent  Plan > Deployment Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.checkElement('//*[@id="protect"]');
      actions.clickOnElementWithText(' Save Stage');
      actions.waitForActionToComplete(2000);
      actions.clickOnElementWithText('Staging');
      actions.iSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
      actions.clickOnElementWithText('Create Version Tag');
      actions.iSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
      actions.clickOnElementWithText('Import Template');
      actions.checkingUrlEndsWith('env/staging/import');
      actions.clickOnElementWithText('Export Template');
      actions.checkingUrlEndsWith('env/staging/export');
    });
    tags('smoke').describe('Independent  Plan > Integrations Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('PDF Management');
      actions.checkingUrlEndsWith('env/pdf');
      actions.iSeeText('1');
      actions.iSeeText('10');
      // actions.clickOnElementWithText('Change Plan');
      // actions.checkingUrlEndsWith('/billing');
      // actions.iSeeText('$15/month');
      // actions.clickOnElementWithText('Select');
      // actions.iSeeText('$65/month');
      // actions.clickOnButton(' Confirm Billing Change');
      // actions.waitForActionToComplete(4000);
      // actions.iSeeText('$65/month');
      // actions.clickOnElementWithText('Settings');
      // actions.clickOnElementWithText('PDF Management');
      // actions.checkingUrlEndsWith('env/pdf');
      // actions.iSeeText('25');
      // actions.iSeeText('1,000');
      actions.clickOnElementWithText('Integrations');
      actions.checkingUrlEndsWith('env/integrations/info');
      actions.clickOnElementWithText('Email Providers');
      actions.iSeeText('SMTP Settings');
      actions.iSeeText('SendGrid Settings');
      actions.iSeeText('Mailgun Settings');
      actions.iSeeText('Custom Email Server');
      actions.clickOnElementWithText('SMTP Settings');
      actions.checkElement('//*[@id="smtpSecure"]');
      actions.enterTextInField('#smtpHost','smtpHost');
      actions.enterTextInField('#smtpPort','smtpPort');
      actions.enterTextInField('#smtpUser','smtpUser');
      actions.enterTextInField('#smtpPass','smtpPass');
      actions.clickOnElementWithText('Save Settings');
    // actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.iSeeValueIn('#smtpHost','smtpHost');
      actions.iSeeValueIn('#smtpPort','smtpPort');
      actions.iSeeValueIn('#smtpUser','smtpUser');
      actions.iSeeValueIn('#smtpPass','smtpPass');
      // actions.clickOnElementWithText('Forms');
      // actions.clickOnElementWithText(' Actions');
      // actions.clickOnElementWithText('Select an Action');
      // actions.clickOnElementWithText('Email');
      // actions.clickOnElementWithText(' Add Action');
      // actions.clickOnClass('#transport');
      // actions.iSeeText('SMTP');
      // actions.clickOnElementWithText('Settings');
      // actions.clickOnElementWithText('Integrations');
      // actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('SendGrid Settings');
      actions.clickOnElementWithText('SendGrid');
      actions.switchTab();
      actions.checkingUrlIamOn('https://sendgrid.com/');
      actions.closeWindow();
      actions.checkingUrlEndsWith('/env/integrations/email');
      actions.enterTextInField('#sendGridPassword','sendGridPassword');
      actions.clickOnElementWithText('Save Settings');
    // actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.iSeeValueIn('#sendGridPassword','sendGridPassword');
      // actions.clickOnElementWithText('Forms');
      // actions.clickOnElementWithText(' Actions');
      // actions.clickOnElementWithText('Select an Action');
      // actions.clickOnElementWithText('Email');
      // actions.clickOnElementWithText(' Add Action');
      // actions.clickOnClass('#transport');
      // actions.iSeeText('SendGrid');
      // actions.clickOnElementWithText('Settings');
      // actions.clickOnElementWithText('Integrations');
      // actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('Mailgun Settings');
      actions.clickOnElementWithText('Mailgun');
      actions.switchTab();
      actions.checkingUrlIamOn('https://www.mailgun.com/');
      actions.closeWindow();
      actions.checkingUrlEndsWith('/env/integrations/email');
      actions.enterTextInField('#mailgunAPIKey','mailgunAPIKey');
      actions.enterTextInField('#mailgunDomain','mailgunDomain');
      actions.clickOnElementWithText('Save Settings');
    // actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.iSeeValueIn('#mailgunAPIKey','mailgunAPIKey');
      actions.iSeeValueIn('#mailgunDomain','mailgunDomain');
      // actions.clickOnElementWithText('Forms');
      // actions.clickOnElementWithText(' Actions');
      // actions.clickOnElementWithText('Select an Action');
      // actions.clickOnElementWithText('Email');
      // actions.clickOnElementWithText(' Add Action');
      // actions.clickOnClass('#transport');
      // actions.iSeeText('Mailgun');
      // actions.clickOnElementWithText('Settings');
      // actions.clickOnElementWithText('Integrations');
      // actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('Custom Email Server');
      actions.clickOnElementWithText('https://github.com/formio/formio-webhook-receiver');
      actions.checkingUrlIamOn('https://github.com/formio/formio-webhook-receiver');
      actions.goBack();
      actions.checkingUrlEndsWith('/env/integrations/email');
      actions.clickOnElementWithText('Custom Email Server');
      actions.enterTextInField('#customUrl','customUrl');
      actions.enterTextInField('#customPassword','customPassword');
      actions.clickOnElementWithText('Save Settings');
    // actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.iSeeValueIn('#customUrl','customUrl');
      actions.iSeeValueIn('#customPassword','customPassword');
      // actions.clickOnElementWithText('Forms');
      // actions.clickOnElementWithText(' Actions');
      // actions.clickOnElementWithText('Select an Action');
      // actions.clickOnElementWithText('Email');
      // actions.clickOnElementWithText(' Add Action');
      // actions.clickOnClass('#transport');
      // actions.iSeeText('Custom');
      actions.clickOnElementWithText('File Storage');
      actions.iSeeText('Upgrade your project to a paid plan to access file storage settings.');
      actions.clickOnElementWithText('Data Connections');
      actions.clickOnElementWithText('Authentication');
      actions.checkingUrlEndsWith('env/authentication/info');
      actions.iSeeText('Form.io Auth');
      actions.clickOnElementWithText('Form.io Auth');
      actions.checkingUrlEndsWith('/env/authentication/formio');
      actions.clickOnElementWithText('Login');
      actions.checkingUrlIamOn('https://help.form.io/userguide/actions/#action-authentication');
      actions.goBack();
      actions.checkingUrlEndsWith('/env/authentication/formio');
      actions.clickOnElementWithText('roles');
      actions.switchTab();
      actions.checkingUrlIamOn('https://help.form.io/userguide/roles-and-permissions/');
      actions.closeWindow();
      actions.checkingUrlEndsWith('/env/authentication/formio');
      actions.clickOnElementWithText('Role Assignment');
      actions.switchTab();
      actions.checkingUrlIamOn('https://help.form.io/userguide/actions/#action-role-assignment');
      actions.closeWindow();
      actions.checkingUrlEndsWith('/env/authentication/formio');
      actions.clickOnElementWithText('OAuth');
      actions.checkingUrlEndsWith('/env/authentication/oauth');
      actions.clickOnElementWithText('OpenID');
      actions.iSeeText('Upgrade your project to a paid plan to access OAuth settings.');
      actions.iSeeText('LDAP');
      actions.clickOnElementWithText('LDAP');
      actions.checkingUrlEndsWith('/env/authentication/ldap');
      actions.iSeeText('SAML');
      actions.clickOnElementWithText('SAML');
      actions.checkingUrlEndsWith('/env/authentication/saml');
      actions.iSeeText('Support for SAML authentication is coming soon. Please contact us for more information.');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Webhook (Premium)');
      actions.clickOnElementWithText(' Add Action');
    // actions.clickOnClass('.toast-message');
      actions.iSeeText(' This is a Premium Action, please upgrade your ');
      actions.checkElementIsDisabled('//*[@id="title"]');
      actions.clickOnElementWithText('Settings');
    });
    tags('smoke').describe('Deleting independentProject',function(){
      actions.clickOnClass('.fa.fa-cog');
      actions.clickOnElementWithText('Delete independentProject Project');
      actions.clickOnElementWithText(' Yes');
      actions.iDonotSeeText('independentProject');
    });
  });
};
