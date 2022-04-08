var LocationManager = require('../testManager/locationManager');
const path = require('path');
var self = this;


// verify the main balance on the deposit or withdraw page
exports.verifyBalance = function(main_balance){
	browserinstance.findElement(LM('balance')).getText().then(function(balance){
        expect(main_balance == balance).toBe(true);
    }, function(error){
        fail("The main balance is not visible or check for some other issue: "+error);
    });
};

// verify the data of transaction fee on deposit or withdraw page
exports.verifytransactionFee = function(amt){
	browserinstance.findElement(LM('transaction_fee')).getText().then(function(transaction_fee){
        console.log("Transaction fee: " + transaction_fee);
        transac_fee = 0.3*amt
        expect(transac_fee == transaction_fee).toBe(true);

    }, function(error){
        fail("The transaction fee is not visible or check for some other issue: "+error);
    });
};
 
// verify final deposit or withdraw money
exports.verifyFinalTransactionAmt = function(actionKey, amt){

    let final_amt;
    if(actionKey == 'final_deposit_amt'){
        // calculate the rate of final amount to be deposited into account after deduction transaction fee
        final_amt = amt - 0.3*amt;
    }
    else{
        // calculate the rate of final amount to be withdraw from account after adding transaction fee
        final_amt = amt + 0.3*amt;
    }

	browserinstance.findElement(LM(actionKey)).getText().then(function(final_transaction_amt){
        console.log("Final transaction amt: " + final_transaction_amt);
        expect(final_amt == final_transaction_amt).toBe(true);

    }, function(error){
        fail("The final transaction amt is not visible or check for some other issue: "+error);
    });
};

// enter the amount to be deposited or withdrawn
exports.enterAmt = function(actionKey,amt){
    
	browserinstance.findElement(LM('enter_amt')).sendKeys(amt).then(function(){
        console.log("Transaction Amt: " + amt);
        self.verifytransactionFee(amt)
        self.verifyFinalTransactionAmt("final_"+actionKey+"_amt", amt)
        
    }, function(error){
        fail("Error in enter data or check for some other issue: "+error);
    });
};

// click on deposit or withdraw button based on actionKey input
exports.clickActionButton = function(actionKey){
    browserinstance.waitForAngularEnabled(false);
	browserinstance.findElement(LM(actionKey)).click().then(function(){
        console.log("Finished Money Transaction");
    }, function(error){
        fail("Error in clicking the button or check for some other issue: "+error);
    });
};


var LM = function call_LM(id) {
    var filename = path.basename(__filename);
    return (LocationManager.locationMngfactory(filename, id));
};