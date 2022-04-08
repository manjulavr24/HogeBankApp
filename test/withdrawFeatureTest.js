const path = require('path');
const fs = require('fs');
var HogeLoginPage = require('../pages/HogeLoginPage.js');
var HogeDashboardPage = require('../pages/HogeDashboardPage.js');
var DepositorWithdraw = require('../pages/DepositorWithdraw.js');
var dataFilePath = path.resolve(__dirname, "../data/inputData.json");

describe('Withdraw money from account', function(){

    let appdata = JSON.parse(fs.readFileSync(dataFilePath));

    it('Step_1_Create new user and login to app', function () {

        console.log('Signup and login to app');
        HogeLoginPage.gotoAppUrl(appdata.app_url);
        HogeLoginPage.login_logout('signup');
        HogeLoginPage.enterInputCredential(appdata.username, passkey);
        HogeLoginPage.login_logout('signup');
		
    });

    it('Step_2_Verify User Name, and click on withdraw', function () {

        console.log('Verify User Name, and click on withdraw');
        HogeDashboardPage.getUser(appdata.username);
        HogeDashboardPage.clickActioButton("withdraw");
		
    });

    it('Step_3_Enter amount and click withdraw', function () {

        console.log('Enter amount and click withdraw');
        DepositorWithdraw.enterAmt("withdraw",appdata.withdraw_amount);
        DepositorWithdraw.clickActionButton("withdraw");
		
    });

    it('Step_4_Verify balance after withdrawn before and after 10 sec', function () {

        console.log('Verify balance after withdrawn');        
        HogeDashboardPage.getBalance().then(function(balanceAmt){
            HogeDashboardPage.verifyBalanceAfterWithdraw(appdata.withdraw_amount, balanceAmt);
        })
        HogeLoginPage.login_logout('logout');
        browserinstance.close();
		
    });

});