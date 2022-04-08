const path = require('path');
const fs = require('fs');
var HogeLoginPage = require('../pages/HogeLoginPage.js');
var HogeDashboardPage = require('../pages/HogeDashboardPage.js');
var dataFilePath = path.resolve(__dirname, "../data/inputData.json");


describe('User creation and login to Hoge bank app', function(){

    var appdata = JSON.parse(fs.readFileSync(dataFilePath));
    
	it('Step_1_Signup with new username', function () {

        HogeLoginPage.gotoAppUrl(appdata.app_url);
        HogeLoginPage.login_logout('signup');
        console.log('Signup with correct user credential')
        HogeLoginPage.enterInputCredential(appdata.username, passkey);
        HogeLoginPage.login_logout('signup');
        HogeDashboardPage.getUser(appdata.username);
        HogeLoginPage.login_logout('logout');
    
    });

    it('Step_2_Login to the application', function () {
        
        console.log('Login to the application')
        HogeLoginPage.enterInputCredential(appdata.username, passkey);
        HogeLoginPage.login_logout('login');
        HogeDashboardPage.getUser(appdata.username);
        HogeLoginPage.login_logout('logout');
        browserinstance.close();
    });
	
	
});