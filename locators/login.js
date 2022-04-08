var locatorID = require('./locatorinJson/login.json')

exports.pagelocfactory = function(locID){
	switch (locID){
		case 'username':
            return by.xpath(locatorID.username_txtbox);
            break;
		case 'passkey':
            return by.xpath(locatorID.password_txtbox);
            break;
		case 'signup':
            return by.xpath(locatorID.signup);
            break;
		case 'login':
            return by.xpath(locatorID.login);
            break;
		case 'signup_error':
            return by.xpath(locatorID.signup_error);
            break;
            case 'login_error':
            return by.xpath(locatorID.login_error);
            break;
            case 'logout':
            return by.xpath(locatorID.logout);
            break;

	}
}