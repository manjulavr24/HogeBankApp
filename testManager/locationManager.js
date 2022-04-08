var LoginPageloc = require("../locators/login.js");
var DashBoardPageloc = require("../locators/dashboard.js");
var DepositWithdrawPageloc = require("../locators/deposit_withdraw.js");

exports.locationMngfactory = function(filename, locator) {
    switch (filename) {
        case "HogeLoginPage.js":
          return LoginPageloc.pagelocfactory(locator);
          break;
        case "HogeDashboardPage.js":
          return DashBoardPageloc.pagelocfactory(locator);
          break;
        case "DepositorWithdraw.js":
          return DepositWithdrawPageloc.pagelocfactory(locator);
          break;
    }
}