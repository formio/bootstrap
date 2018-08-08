module.exports = function (actions,tags) {
  describe('Team Pro Plan Settings',function(){
    describe('Team Pro Plan > Environment Settings',function() {
      actions.logout();
      actions.iAmLoggedInFor('authProfile');
      actions.goToPage('#/');
      // actions.iAmLoggedInFor('profileuser5');
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
      actions.projectExisting('teamProProject', 'This is a test project');
      actions.clickOnElementWithText('teamProProject');
      actions.clickOnElementWithText('Trial');
      actions.upgradeToPlan("Team Pro");
      actions.clickOnElementWithText(' Confirm Billing Change');
      actions.waitForActionToComplete(2000);
      actions.iSeeTextIn("a.project-plan.label-success", "Team Pro");
      actions.iSeeText('$100/month');
      actions.checkElementIsNotDisabled('//*[@id="main-wrapper"]/div[2]/div[2]/div/div/div/div[2]/div[2]/ul[3]/li[2]/div/div[3]/input');
      actions.clickOnElementWithText(' Teams');
      actions.iDonotSeeText('Upgrade your project to Team Pro or above to enable teams.');
      actions.clickOnElementWithText('Overview');
      actions.checkingUrlEndsWith('/overview');
      actions.iSeeText('Submission Requests');
      actions.iSeeText(' / 250,000');
      actions.iSeeText('Emails');
      actions.iSeeText('0 / ∞');
    });
    tags('smoke').describe('',function(){
      actions.clickOnElementWithText('Settings');
      actions.checkElementIsDisabled('//*[@id="form-group-title"]/input');
      actions.checkElementIsNotDisabled('//*[@id="form-group-name"]/div[1]/input');
      actions.enterTextInField('#form-group-name>div.input-group.ng-scope>input', '${random-name>test.name}');
      actions.waitForActionToComplete(2000);
      actions.clickOnElementWithText(' Save Stage');
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText('User Login');
      actions.iSeeTextCount('${test.name}', 2);
      actions.clickOnElementWithText('Resources');
      actions.clickOnElementWithText(' API');
      actions.iSeeTextCount('${test.name}', 4);
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
      actions.clickOnClass('.toast-message');
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
      actions.checkElement('//*[@id="protect"]');
      actions.clickOnElementWithText(' Save Stage');
      actions.waitForActionToComplete(2000);
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('On-Premise Environment');
      actions.iSeeText('Subdirectories');
      actions.enterTextInField('#serverURL','test');
      actions.enterTextInField('#portalSecret','test');
      actions.clickOnElementWithText('Continue ');
      actions.iSeeText('Environment did not respond to a CORS request properly. It may not be a properly configured form.io server or does not exist.');
      actions.clickOnElementWithText('API Keys');
      actions.clickOnElementWithText('On-Premise Environment');
      actions.iDonotSeeText('test');
      actions.enterTextInField('#serverURL','https://remote.form.io');
      actions.enterTextInField('#portalSecret','remotesecret');
      actions.clickOnElementWithText('Continue ');
      actions.iSeeText('Connect to an On-Premise Environment');
      actions.clickOnClass('.ui-select-match.ng-scope');
      actions.clickOnClass('.ui-select-choices-row-inner');
      actions.clickOnElementWithText('Connect Stage ');
      actions.waitForActionToComplete(2000);
      actions.iSeeText('https://remote.form.io');
      actions.waitForActionToComplete(2000);
      actions.pageReload();
      actions.waitForActionToComplete(2000);
      actions.iSeeText('https://remote.form.io/');
      actions.clickOnElementWithText('Disconnect');
      actions.waitForActionToComplete(2000);
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('API Keys');
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
      actions.enterTextInField('#cors','testCORS');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.pageReload();
      actions.iSeeValueIn('#cors','testCORS');
      actions.enterTextInField('#cors','*');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.clickOnElementWithText('Security');
      actions.iDonotSeeText('Upgrade your project to a paid plan to enable security settings.');
      actions.enterTextInField('#secret','testSecurity');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.pageReload();
      actions.iSeeValueIn('#secret','testSecurity');
      actions.clickOnElementWithText('Custom JS and CSS');
      actions.checkingUrlEndsWith('/env/settings/customjscss');
      // actions.enterTextInField('#custom-css','Test CSS');
      // actions.enterTextInField('#custom-js','Test JS');
      // actions.clickOnElementWithText('Save Settings');
      // actions.clickOnClass('.toast-message');
      // actions.pageReload();
      // actions.waitForActionToComplete(1000);
      // actions.acceptAlert();
      // actions.enterTextInField('#custom-css','');
      // actions.enterTextInField('#custom-js','');
      // actions.clickOnElementWithText('Save Settings');
      // actions.clickOnClass('.toast-message');
    });
    tags('smoke').describe('Team Pro Plan > Deployment Settings',function(){
        actions.clickOnElementWithText('Settings');
        actions.clickOnElementWithText('Staging');
        actions.iSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
        actions.clickOnElementWithText('Create Version Tag');
        actions.iSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
        actions.clickOnElementWithText('Import Template');
        actions.checkingUrlEndsWith('env/staging/import');
        actions.clickOnElementWithText('Export Template');
        actions.checkingUrlEndsWith('env/staging/export');
    });
    tags('smoke').describe('Team Pro Plan > Integrations Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('PDF Management');
      actions.checkingUrlEndsWith('env/pdf');
      actions.iSeeText('1');
      actions.iSeeText('10');
      actions.clickOnElementWithText('Enterprise');
      actions.clickOnElementWithText('PDF Server Deployment Instructions');
      actions.switchTab();
      actions.checkingUrlIamOn('https://help.form.io/userguide/pdfserver/');
      actions.closeWindow();
      actions.enterTextInField('#pdfserver','https://pdfserver/');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Enterprise');
      actions.iSeeValueIn('#pdfserver','https://pdfserver/');
      // actions.clickOnElementWithText('Change Plan');
      // actions.checkingUrlEndsWith('/billing');
      // actions.iSeeText('$15/month');
      // actions.clickOnElementWithText('Select');
      // actions.iSeeText('$65/month');
      // actions.clickOnElementWithText(' Confirm Billing Change');
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
      actions.clickOnElementWithText('SendGrid');
      actions.switchTab();
      actions.checkingUrlIamOn('https://sendgrid.com/');
      actions.closeWindow();
      actions.checkingUrlEndsWith('/env/integrations/email');
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
      actions.clickOnElementWithText('Mailgun');
      actions.switchTab();
      actions.checkingUrlIamOn('https://www.mailgun.com/');
      actions.closeWindow();
      actions.checkingUrlEndsWith('/env/integrations/email');
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
      actions.clickOnElementWithText('https://github.com/formio/formio-webhook-receiver');
      actions.checkingUrlIamOn('https://github.com/formio/formio-webhook-receiver');
      actions.goBack();
      actions.checkingUrlEndsWith('/env/integrations/email');
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
      actions.iDonotSeeText('Upgrade your project to a paid plan to access file storage settings.');
      actions.iSeeText('S3 Storage');
      actions.iSeeText('Dropbox');
      actions.clickOnElementWithText('S3 Storage');
      actions.enterTextInField('#bucket','testbucket');
      actions.iSeeValueIn('#bucketUrl','https://testbucket.s3.amazonaws.com/');
      actions.clickOnClass('#acl');
      actions.iSeeText('Any');
      actions.iSeeText('Public');
      actions.iSeeText('Private');
      actions.enterTextInField('#AWSAccessKeyId','AWSAccessKeyId');
      actions.enterTextInField('#AWSSecretKey','AWSSecretKey');
      actions.enterTextInField('#startsWith','startsWith');
      actions.enterTextInField('#maxSize','100');
      actions.enterTextInField('#expiration','100');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.iSeeValueIn('#AWSAccessKeyId','AWSAccessKeyId');
      actions.iSeeValueIn('#bucket','testbucket');
      actions.iSeeValueIn('#startsWith','startsWith');
      actions.iSeeValueIn('#maxSize','100');
      actions.iSeeValueIn('#expiration','100');
      actions.clickOnElementWithText('Dropbox');
      actions.iSeeText('Use this button to connect this project to a Dropbox account and store uploaded files within that account.');
      actions.iSeeText('Connect to Dropbox');
      actions.clickOnElementWithText('Data Connections');
      actions.clickOnElementWithText('Microsoft Office 365');
      actions.enterTextInField('#tenant','tenant');
      actions.enterTextInField('#clientId','clientId');
      actions.enterTextInField('#email','email');
      actions.enterTextInField('#cert','cert');
      actions.enterTextInField('#thumbprint','thumbprint');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Microsoft Office 365');
      actions.iSeeValueIn('#tenant','tenant');
      actions.iSeeValueIn('#clientId','clientId');
      actions.iSeeValueIn('#email','email');
      actions.iSeeValueIn('#thumbprint','thumbprint');
      actions.iSeeValueIn('#cert','cert');
      actions.clickOnElementWithText('Google Drive');
      actions.enterTextInFieldIndex('#clientId',1,'clientId');
      actions.enterTextInField('#cskey','cskey');
      actions.enterTextInField('#refreshtoken','refreshtoken');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Google Drive');
      actions.iSeeValueIn('#clientId','clientId');
      actions.iSeeValueIn('#cskey','cskey');
      actions.iSeeValueIn('#refreshtoken','refreshtoken');
      actions.clickOnElementWithText('Kickbox');
      actions.enterTextInField('#kickbox-apikey','kickbox-apikey');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Kickbox');
      actions.iSeeValueIn('#kickbox-apikey','kickbox-apikey');
      actions.clickOnElementWithText('Hubspot');
      actions.enterTextInField('#apikey','apikey');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Hubspot');
      actions.iSeeValueIn('#apikey','apikey');
      actions.clickOnElementWithText('SQL Connector');
      actions.enterTextInField('#connectorHost','connectorHost');
      actions.clickOnElementWithText('Select the SQL Type');
      actions.clickOnElementWithText('MySQL');
      actions.enterTextInField('#connectorUser','connectorUser');
      actions.enterTextInField('#connectorPassword','connectorPassword');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('SQL Connector');
      actions.iSeeValueIn('#connectorHost','connectorHost');
      actions.iSeeValueIn('#connectorUser','connectorUser');
      actions.iSeeValueIn('#connectorPassword','connectorPassword');
      actions.clickOnElementWithText('Atlassian');
      actions.enterTextInField('#url','url');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Atlassian');
      actions.iSeeValueIn('#url','url');
      actions.clickOnElementWithText('Moxtra');
      actions.enterTextInFieldIndex('#clientId',2,'clientId');
      actions.enterTextInField('#clientSecret','clientSecret');
      actions.enterTextInField('#orgId','orgId');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnClass('.toast-message');
      actions.waitForActionToComplete(500);
      actions.pageReload();
      actions.waitForActionToComplete(500);
      actions.clickOnElementWithText('Moxtra');
      actions.iSeeValueIn('#clientId','clientId');
      actions.iSeeValueIn('#clientSecret','clientSecret');
      actions.iSeeValueIn('#orgId','orgId');
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
      actions.enterTextInField('#ldapURL','ldapURL');
      actions.enterTextInField('#ldapBindDn','ldapBindDn');
      actions.enterTextInField('#ldapBindCredentials','ldapBindCredentials');
      actions.enterTextInField('#ldapSearchBase','ldapSearchBase');
      actions.enterTextInField('#ldapSearchFilter','ldapSearchFilter');
      actions.clickOnElementWithText('Save Settings');
      // actions.clickOnClass('.toast-message');
      // actions.waitForActionToComplete(500);
      // actions.pageReload();
      // actions.waitForActionToComplete(500);
      // actions.iSeeValueIn('#ldapURL','ldapURL');
      // actions.iSeeValueIn('#ldapBindDn','ldapBindDn');
      // actions.iSeeValueIn('#ldapBindCredentials','ldapBindCredentials');
      // actions.iSeeValueIn('#ldapSearchBase','ldapSearchBase');
      // actions.iSeeValueIn('#ldapSearchFilter','ldapSearchFilter');
      actions.iSeeText('SAML');
      actions.clickOnElementWithText('SAML');
      actions.checkingUrlEndsWith('/env/authentication/saml');
      actions.iSeeText('Support for SAML authentication is coming soon. Please contact us for more information.');
    });
    tags('smoke').describe('Deleting teamProProject',function(){
      actions.clickOnClass('.fa.fa-cog');
      actions.clickOnElementWithText('Delete teamProProject Project');
      actions.clickOnElementWithText(' Yes');
      actions.iDonotSeeText('teamProProject');
    });
  });
};
