var LocationManager = require('../testManager/LocationManager.js');
const path = require('path');

global.passkey = Math.random().toString(36).slice(2)+'C';

// open browser and gotoAppUrl the URL
exports.gotoAppUrl = function (url) {
    console.log("URL : "+url);
    global.appURL = url;
    browserinstance.ignoreSynchronization = true;
    browserinstance.get(url);
    browserinstance.waitForAngularEnabled(false);
    browserinstance.driver.manage().window().maximize();
};

//  enter the username and password
exports.enterInputCredential = function(username, password){
    browserinstance.findElement(LM('username')).sendKeys(username).then(function(){
        console.log(username+" entered");
    }, function(error){
        fail("Either login page not loaded or check for any other issue : "+error);
    });

    browserinstance.findElement(LM('passkey')).sendKeys(password).then(function(){
        console.log("Password entered");
    }, function(error){
        fail("Either login page not loaded or check for any other issue : "+error);
    });
};

// clear the inputs entered in the textbox 
exports.clearInputCredential = function(){
    browserinstance.ignoreSynchronization = true;
    browserinstance.findElement(LM('username')).clear()
    browserinstance.findElement(LM('passkey')).clear()
};

// click on the login or logout based on actionKey
exports.login_logout = function(actionKey){

    browserinstance.ignoreSynchronization = true;
	browserinstance.findElement(LM(actionKey)).click().then(function(){
        console.log("Clicked on " + actionKey + " button");
    }, function(error){
        fail("Either not able to identify " + actionKey + " button or check for any other issue : "+error);
    });
};

// verify the signup error
exports.verifySignupErrorMsg = function (msg) {
    browserinstance.findElement(LM('signup_error')).getText().then(function(errorMsg){
        expect(errorMsg == msg).toBe(true);
    });   
};

// verify the login error
exports.verifyLoginErrorMsg = function (msg) {
    browserinstance.findElement(LM('login_error')).getText().then(function(errorMsg){
        expect(errorMsg == msg).toBe(true);
    });   
};

var LM = function call_LM(id) {
    var filename = path.basename(__filename);
    return (LocationManager.locationMngfactory(filename, id));
};