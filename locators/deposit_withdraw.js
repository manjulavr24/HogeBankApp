var locatorID = require('./locatorinJson/deposit_withdraw.json')

exports.pagelocfactory = function(locID){
	switch (locID){
            case 'balance':
            return by.xpath(locatorID.balance);
            break;
		case 'transaction_fee':
            return by.xpath(locatorID.transaction_fee);
            break;
		case 'final_deposit_amt':
            return by.xpath(locatorID.final_deposit_amt);
            break;
		case 'enter_amt':
            return by.xpath(locatorID.enter_amt);
            break;
		case 'deposit':
            return by.xpath(locatorID.deposit_btn);
            break;
            case 'final_withdraw_amt':
            return by.xpath(locatorID.final_withdraw_amt);
            break;
		case 'withdraw':
            return by.xpath(locatorID.withdraw_btn);
            break;
	}
}