var LocationManager = require('../testManager/LocationManager.js');
const path = require('path');

// get username on dashboard page
exports.getUser = function(usr){
    browserinstance.waitForAngularEnabled(false);
	browserinstance.findElement(LM('user')).getText().then(function(user){
        expect(usr == user).toBe(true);
    }, function(error){
        fail("The user is not visible or check for some other issue: "+error);
    });
};

// read the last updated time and date
exports.getLastUpdate = function(){
	browserinstance.findElement(LM('last_update')).getText().then(function(lastUpdatedTime){
        console.log("The last updated time is: " + lastUpdatedTime);
    }, function(error){
        fail("The last updated time is not visible or check for some other issue: "+error);
    });
};

// read the balance amount on dashboard
exports.getBalance = function(){
	return browserinstance.findElement(LM('balance')).getText().then(function(balance){
        console.log("Balance: " + balance);
        return balance;        
    }, function(error){
        fail("The balance on dashboard is not visible or check for some other issue: "+error);
    });
};

// read the transaction list
exports.getTransaction = function(){
	browserinstance.findElement(LM('transaction')).getText().then(function(transaction){
        console.log("Transaction List: " + transaction);
    }, function(error){
        fail("The Transaction list is not visible or check for some other issue: "+error);
    });
};

// click on deposit or withdraw button on dashboard based on actionKey input
exports.clickActioButton = function(actionKey){
	browserinstance.findElement(LM(actionKey)).click().then(function(){
        console.log("Clicked on "+ actionKey);
    }, function(error){
        fail("The " + actionKey +" button is not visible or check for some other issue: "+error);
    });
};

// verify the balance amount before and after 10 sec delay after deposit
exports.verifyBalanceAfterDeposit = function (amt_deposited, old_balance){

    // final amount deposited after deduction of transaction fee
    final_deposit_amt = amt_deposited - amt_deposited*0.3;

    // final amonut of balance after deposit
    balance_after_deposit = parseInt(old_balance) + parseInt(final_deposit_amt);

    // verify balance before 10 sec of deposit
    browserinstance.findElement(LM('balance')).getText().then(function(balance){
        expect(old_balance == balance).toBe(true);
    });

    // verify balance after 10 sec of deposit
    browserinstance.wait(function(){
        browserinstance.findElement(LM('balance')).getText().then(function(balance){
            if(balance_after_deposit.toFixed(2) == balance){
                return true
            }
        }); 
    },10000);
};

// verify the balance amount before and after 10 sec delay after withdrawn
exports.verifyBalanceAfterWithdraw = function(amt_withdrawn, old_balance){

    // final amonut of balance after withdrawn
    balance_after_withdraw = old_balance - (amt_withdrawn + amt_withdrawn*0.3);

    // verify balance before 10 sec of withdraw
    browserinstance.findElement(LM('balance')).getText().then(function(balance){
        expect(old_balance == balance).toBe(true);
    });

    // verify balance after 10 sec of withdraw
    browserinstance.wait(function(){
        browserinstance.findElement(LM('balance')).getText().then(function(balance){
            if(balance_after_withdraw.toFixed(2) == balance){
                return true
            }
        });        
    },10000);
};

var LM = function call_LM(id) {
    var filename = path.basename(__filename);
    return (LocationManager.locationMngfactory(filename, id));
};