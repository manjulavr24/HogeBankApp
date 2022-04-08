const path = require('path');
const fs = require('fs');
var HogeLoginPage = require('../pages/HogeLoginPage.js');
var dataFilePath = path.resolve(__dirname, "../data/inputData.json");

describe('Negative_Usecase: User creation with various invalid inputs', function(){

    var appdata = JSON.parse(fs.readFileSync(dataFilePath));
    
	it('Step_1_Signup with empty username', function () {
        HogeLoginPage.gotoAppUrl(appdata.app_url);
        HogeLoginPage.login_logout('signup');
        console.log('Signup with empty username');
        HogeLoginPage.enterInputCredential("", "Testtest1");
        HogeLoginPage.login_logout('signup');
		HogeLoginPage.verifySignupErrorMsg("User name cannot be blank");
        HogeLoginPage.clearInputCredential();
    });
	
	it('Step_2_Signup with username with blank space', function () {
        console.log('Signup with username with blank space');
        HogeLoginPage.enterInputCredential("Test User Name", "Testtest1");
        HogeLoginPage.login_logout('signup');
		HogeLoginPage.verifySignupErrorMsg("User name cannot contain whitespaces");
        HogeLoginPage.clearInputCredential();
    });
	
	it('Step_3_Signup with empty password', function () {
        console.log('Signup with empty password');
        HogeLoginPage.enterInputCredential("TestUser", " ");
        HogeLoginPage.login_logout('signup');
		HogeLoginPage.verifySignupErrorMsg("Password cannot be less than 8 characters");
        HogeLoginPage.clearInputCredential();
    });
	
	it('Step_4_Signup with password less than 8 char', function () {
        console.log('Signup with password less than 8 char');
        HogeLoginPage.enterInputCredential("TestUserName", "Testte1");
        HogeLoginPage.login_logout('signup');
		HogeLoginPage.verifySignupErrorMsg("Password cannot be less than 8 characters");
        HogeLoginPage.clearInputCredential();
    });
	
	it('Step_5_Signup with password equal to more than 32 char', function () {
        console.log('Signup with password equal to more than 32 char');
		// login with more than 32 char
        HogeLoginPage.enterInputCredential("TestUserName", "kbkseyyvccgpqtqterkrrkretqtqpgccvyyskbk");
        HogeLoginPage.login_logout('signup');
		HogeLoginPage.verifySignupErrorMsg("Password cannot be longer than 32 characters");
		// login with exact 32 char
		HogeLoginPage.enterInputCredential("TestUserName", "kbkseyyvccgpqtqterkrrkretqtqpgM1");
        HogeLoginPage.login_logout('signup');
		HogeLoginPage.verifySignupErrorMsg("Password cannot be longer than 32 characters");
        HogeLoginPage.clearInputCredential();
    });
	
	it('Step_6_Signup with password with no digit', function () {
        console.log('Signup with password with no digit');
        HogeLoginPage.enterInputCredential("TestUserName", "Testtests");
        HogeLoginPage.login_logout('signup');
		HogeLoginPage.verifySignupErrorMsg("Password must contain numbers");
        HogeLoginPage.clearInputCredential();
    });
	
	it('Step_7_Signup with password with no uppercase', function () {
        console.log('Signup with password with no uppercase')
        HogeLoginPage.enterInputCredential("TestUserName", "testtests1");
        HogeLoginPage.login_logout('signup');
		HogeLoginPage.verifySignupErrorMsg("Password must contain uppercase letters");
        HogeLoginPage.clearInputCredential();
        browserinstance.close();
    });	
	
});