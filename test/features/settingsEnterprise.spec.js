module.exports = function (actions) {
  describe('Enterprise  Plan Settings',function(){
    describe('Enterprise  Plan > Environment Settings',function(){
      actions.enterTextInField('.login-container #email','automated@tests');
      actions.enterTextInField('.login-container #password','password');
      actions.clickOnElementWithText('LOG IN');
      actions.iAmLoggedIn();
      actions.waitForActionToComplete(2000);
      actions.goToPage('#/profile/payment/view');
      actions.clickOnElementWithText('Change Credit Card');
      actions.enterTextInField('#cardholderName','Test');
      actions.enterTextInField('#ccNumber','4111111111111111');
      actions.enterTextInField('#securityCode','411');
      actions.clickOnClass('#form-group-ccExpiryMonth');
      actions.clickOnElementWithText('01');
      actions.clickOnClass('#form-group-ccExpiryYear');
      actions.clickOnElementWithText('25');
      actions.clickOnClass('#submit');
      actions.goToPage('#/');
      actions.clickOnElementWithText('New Project');
      actions.enterTextInField('#title','enterpriseProject');
      actions.clickOnElementWithText(' Create Project');
      actions.clickOnElementWithText('Trial');
      actions.clickOnElementWithText('Upgrade');
      actions.clickOnElementWithText(' Confirm Billing Change');
      actions.waitForActionToComplete(2000);
      actions.goToPage('#/');
      actions.clickOnElementWithText('enterpriseProject');
      actions.enableAngular(false);
      actions.clickOnElementWithText('Settings');
      actions.checkElementIsDisabled('//*[@id="form-group-title"]/input');
      actions.checkElementIsNotDisabled('//*[@id="name"]');
      actions.enterTextInField('#name','commercialplantest');
      actions.enableAngular(true);
      actions.waitForActionToComplete(4000);
      actions.enableAngular(false);
      actions.clickOnElementWithText(' Save Stage');
      actions.iSeeText('Project saved.');
      actions.iSeeValueIn('#name','commercialplantest');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText('User Login');
      actions.iSeeValueIn('#form-group-path','commercialplantest');
      actions.clickOnElementWithText('Resources');
      actions.clickOnElementWithText(' API');
      actions.iSeeValueIn('.wrap-table-cell','commercialplantest');
      actions.clickOnElementWithText('Settings');
      actions.checkElement('//*[@id="protect"]');
      actions.iSeeElement('i.fa.fa-shield.ng-scope');
      actions.waitForActionToComplete(4000);
      actions.clickOnElementWithText(' Save Stage');
      actions.iSeeText('Project saved.');
      actions.waitForActionToComplete(4000);
      actions.clickOnElementWithText('Forms');
      actions.checkElementWithTextIsDisabled(' New Form');
      actions.checkElementWithTextIsDisabled(' Edit');
      actions.checkElementWithTextIsDisabled(' Actions');
      actions.checkElementWithTextIsDisabled(' Access');
      actions.checkElementWithTextIsNotDisabled(' Use');
      actions.checkElementWithTextIsNotDisabled(' Embed');
      actions.clickOnElementWithText(' Data');
      actions.checkElementWithTextIsNotDisabled('{...} Export JSON');
      actions.checkElementWithTextIsNotDisabled(' Export CSV');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('On-Premise Environment');
      actions.iSeeText('Subdirectories');
      actions.enterTextInField('#serverURL','test');
      actions.enterTextInField('#portalSecret','test');
      actions.clickOnElementWithText('Continue');
      actions.iSeeText('Environment did not respond to a CORS request properly. It may not be a properly configured form.io server or does not exist.');
      actions.clickOnElementWithText('API Keys');
      actions.clickOnElementWithText('On-Premise Environment');
      actions.iDonotSeeText('test');
      actions.enterTextInField('#serverURL','https://remote.form.io');
      actions.enterTextInField('#portalSecret','jeriahrocks');
      actions.clickOnElementWithText('Continue');
      actions.iSeeText('Connect to an On-Premise Environment');
      actions.clickOnClass('.ui-select-match.ng-scope');
      actions.clickOnClass('#ui-select-choices-row-0-2');
      actions.clickOnElementWithText('Connect Stage');
      actions.iSeeText('https://remote.form.io');
      actions.clickOnElementWithText('Disconnect');
      actions.clickOnElementWithText('API Keys');
      actions.enableAngular(true);
      actions.waitForActionToComplete(4000);
      actions.enableAngular(false);
      actions.clickOnElementWithText('Add New Key');
      actions.clickOnClass('.fa.fa-trash');
      actions.clickOnElementWithText('CORS');
      actions.clickOnElementWithText('Custom JS and CSS');
      actions.checkingUrlEndsWith('env/settings/customjscss');
    });
    describe('Enterprise   Plan > Deployment Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.checkElement('//*[@id="protect"]');
      actions.clickOnElementWithText(' Save Stage');
      actions.clickOnElementWithText('Staging');
      actions.iDonotSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
      actions.clickOnElementWithText('Create Version Tag');
      actions.iDonotSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
      actions.clickOnElementWithText('Import Template');
      actions.checkingUrlEndsWith('env/staging/import');
      actions.clickOnElementWithText('Export Template');
      actions.checkingUrlEndsWith('env/staging/export');
    });
    describe('Enterprise Plan > Integrations Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('PDF Management');
      actions.checkingUrlEndsWith('env/pdf');
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
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Email');
      actions.clickOnElementWithText(' Add Action');
      actions.clickOnClass('#transport');
      actions.iSeeText('SMTP');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('SendGrid Settings');
      actions.enterTextInField('#sendGridPassword','sendGridPassword');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Email');
      actions.clickOnElementWithText(' Add Action');
      actions.clickOnClass('#transport');
      actions.iSeeText('SendGrid');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('Mailgun Settings');
      actions.enterTextInField('#mailgunAPIKey','mailgunAPIKey');
      actions.enterTextInField('#mailgunDomain','mailgunDomain');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Email');
      actions.clickOnElementWithText(' Add Action');
      actions.clickOnClass('#transport');
      actions.iSeeText('Mailgun');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('Custom Email Server');
      actions.enterTextInField('#customUrl','customUrl');
      actions.enterTextInField('#customPassword','customPassword');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Email');
      actions.clickOnElementWithText(' Add Action');
      actions.clickOnClass('#transport');
      actions.iSeeText('Custom');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.clickOnElementWithText('File Storage');
      actions.clickOnElementWithText('Data Connections');
      actions.clickOnElementWithText('OAuth');
    });
    describe('Deleting enterpriseProject',function(){
      actions.clickOnClass('.fa.fa-cog');
      actions.clickOnElementWithText('Delete enterpriseProject Project');
      actions.clickOnElementWithText(' Yes');
      actions.goToPage('#/');
      actions.iDonotSeeText('enterpriseProject');
    });
  });
};
