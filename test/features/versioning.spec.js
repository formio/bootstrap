module.exports = function (actions) {
  describe('Versioning ',function(){
    describe('Test versioning for environments moving up and rolling back',function() {
      actions.logout();
      actions.iAmLoggedInFor('profileuser2');
      actions.goToPage('#/');
      actions.clickOnElementWithText('New Project');
      actions.enterTextInField('#title', 'testProject');
      actions.clickOnElementWithText(' Create Project');
      actions.clickOnLink('Settings');
      actions.clickOnLink('Staging');
      actions.iSeeText('No version tags exist. ');
      actions.clickOnLink('Create Version Tag');
      actions.enterTextInField('#tag', '0.0.1');
      actions.clickOnElementWithText('Create version tag');
      actions.iSeeTextIn('.badge', '0.0.1');
      actions.enterTextInField('#tag', '0.0.3');
      actions.clickOnElementWithText('Create version tag');
      actions.iSeeTextIn('.badge', '0.0.3');
      actions.clickOnLink('Staging');
      actions.selectComponentCount('.tags', 3);
      actions.selectComponentOption('.tags', '0.0.1');
      actions.clickOnElementWithText('Deploy version tag to Live');
      actions.waitForActionToComplete(2000);
      actions.iSeeTextIn('.badge', '0.0.1');
      actions.clickOnLink('Staging');
      actions.selectComponentCount('.tags', 3);
      actions.clickOnElementWithText('+ New Stage');
      actions.enterTextInField('#title', 'Dev');
      actions.waitForActionToComplete(2000);
      actions.clickOnElementWithText(' Add Stage');
      actions.waitForActionToComplete(2000);
      actions.clickOnLink('Settings');
      actions.waitForActionToComplete(2000);
      actions.clickOnLink('Staging');
      actions.waitForActionToComplete(2000);
      actions.selectComponentOption('.tags', '0.0.1');
      actions.clickOnElementWithText('Deploy version tag to Dev');
      actions.waitForActionToComplete(2000);
      actions.iSeeTextIn('.active .environment-tab .badge', '0.0.1');
      actions.waitForActionToComplete(2000);
    });
    describe('Versioning - Forms / Resources',function(){
      actions.clickOnLink('Forms');
      actions.clickOnClass('.glyphicon.glyphicon-cloud-download');
      actions.enterTextInField('#embedURL','https://struntwrmesxmts.form.io/specialcomponent');
      actions.clickOnClass('.form-group.pull-right input');
      actions.enterTextInField('#title','Dev Form .2');
      actions.clickOnElementWithText('Create Form');
      actions.clickOnLink('Resources');
      actions.clickOnElementWithText(' New Resource');
      actions.enterTextInField('#title','Dev Resource .2');
      actions.clickOnElementWithText('Create Resource');
      actions.clickOnLink('Settings');
      actions.clickOnLink('Staging');
      actions.clickOnLink('Create Version Tag');
      actions.enterTextInField('#tag', '0.0.2');
      actions.clickOnElementWithText('Create version tag');
      actions.waitForActionToComplete(2000);
      actions.iSeeTextIn('.active .environment-tab .badge', '0.0.2');
      actions.clickOnElementWithText(' Live ');
      actions.clickOnLink('Settings');
      actions.clickOnLink('Staging');
      actions.selectComponentOption('.tags', '0.0.2');
      actions.clickOnElementWithText('Deploy version tag to Live');
      actions.clickOnLink('Forms');
      actions.clickOnElementWithText('Dev Form .2');
      actions.iSeeText('Email ');
      actions.iSeeText('Currenct ');
      actions.iSeeText('Survey ');
      actions.clickOnLink('Resources');
      actions.iSeeText('Dev Resource .2');
    });
    describe('Versioning  - Form Import / Access settings',function(){
      actions.clickOnElementWithText(' Dev ');
      actions.clickOnLink('Settings');
      actions.clickOnLink('Staging');
      actions.clickOnLink('Create Version Tag');
      actions.enterTextInField('#tag', '0.0.4');
      actions.clickOnElementWithText('Create version tag');
      actions.waitForActionToComplete(2000);
      actions.iSeeTextIn('.active .environment-tab .badge', '0.0.4');
      actions.clickOnLink('Forms');
      actions.clickOnClass('.glyphicon.glyphicon-cloud-download');
      actions.enterTextInField('#embedURL','https://basiccomponenttest.form.io/basiccomponents');
      actions.clickOnClass('.form-group.pull-right input');
      actions.enterTextInField('#title','Dev Form .3');
      actions.clickOnElementWithText('Create Form');
      actions.clickOnElementWithText(' Access');
      actions.clickOnElementWithText(' New Form');
      actions.clickOnElementWithText('API Web Form');
      actions.enterTextInField('#title','Dev Form .2');
      actions.clickOnElementWithText('Create Form');
      actions.clickOnLink('Resources');
      actions.clickOnElementWithText(' New Resource');
      actions.enterTextInField('#title','Dev Resource .2');
      actions.clickOnElementWithText('Create Resource');
      actions.clickOnLink('Settings');
      actions.clickOnLink('Staging');
      actions.clickOnLink('Create Version Tag');
      actions.enterTextInField('#tag', '0.0.2');
      actions.clickOnElementWithText('Create version tag');
      actions.waitForActionToComplete(2000);
      actions.iSeeTextIn('.active .environment-tab .badge', '0.0.2');
      actions.clickOnElementWithText(' Live ');
      actions.clickOnLink('Settings');
      actions.clickOnLink('Staging');
      actions.selectComponentOption('.tags', '0.0.2');
      actions.clickOnElementWithText('Deploy version tag to Live');
      actions.clickOnLink('Forms');
      actions.iSeeText('Dev Form .2');
      actions.clickOnLink('Resources');
      actions.iSeeText('Dev Resource .2');
    });
  });
};
