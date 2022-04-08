const path = require('path');
const fs = require('fs');
var HogeLoginPage = require('../pages/HogeLoginPage.js');
var HogeDashboardPage = require('../pages/HogeDashboardPage.js');
var DepositorWithdraw = require('../pages/DepositorWithdraw.js');
var dataFilePath = path.resolve(__dirname, "../data/inputData.json");

describe('Deposit money to Hoge bank account', function(){

    var appdata = JSON.parse(fs.readFileSync(dataFilePath));

    it('Step_1_Create new user and login to app', function () {

        console.log('Create new user and login to app')
        HogeLoginPage.gotoAppUrl(appdata.app_url);
        HogeLoginPage.login_logout('signup');
        HogeLoginPage.enterInputCredential(appdata.username, passkey);
        HogeLoginPage.login_logout('signup');
		
    });

    it('Step_2_Verify User Name, and click on deposit', function () {

        console.log('Verify User Name, and click on deposit')
        HogeDashboardPage.getUser(appdata.username);        
        HogeDashboardPage.clickActioButton("deposit");
		
    });

    it('Step_3_Enter amount and click deposit', function () {

        console.log('Enter amount and click deposit')
        DepositorWithdraw.enterAmt("deposit", appdata.deposit_amount);
        DepositorWithdraw.clickActionButton("deposit");
		
    });

    it('Step_4_Verify balance after deposit before and after 10 sec', function () {

        console.log('Verify balance after deposit')
        HogeDashboardPage.getBalance().then(function(balanceAmt){
            HogeDashboardPage.verifyBalanceAfterDeposit(appdata.deposit_amount, balanceAmt);
        })
        HogeLoginPage.login_logout('logout');
        browserinstance.close();
		
    });

});