var locatorID = require('./locatorinJson/dashboard.json')

exports.pagelocfactory = function(locID){
	switch (locID){
		case 'deposit':
            return by.xpath(locatorID.deposit);
            break;
		case 'withdraw':
            return by.xpath(locatorID.withdraw);
            break;
		case 'user':
            return by.xpath(locatorID.user);
            break;
		case 'last_update':
            return by.xpath(locatorID.last_update);
            break;
		case 'balance':
            return by.xpath(locatorID.balance);
            break;
		case 'transaction':
            return by.xpath(locatorID.transaction);
            break;
		case 'logout':
            return by.xpath(locatorID.logout);
            break;
	}
}