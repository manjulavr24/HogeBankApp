var fs = require('fs');
var path = require('path');
var os = require('os');
const { report } = require('process');
var downloadsPath = path.resolve(__dirname, '\dataDownload');

exports.config = {
    framework: 'jasmine2',
    allScriptsTimeout: 300000,
    getPageTimeout: 600000,
    suites: {
        specs: [
            'test/createNewUser.js',
            'test/signupFeatureTest.js',
            'test/depositFeatureTest.js',
            'test/withdrawFeatureTest.js',
        ]
    },
    
    capabilities: {
        shardTestFiles: true, 
        maxInstances: 1,
        'directConnect': true,
        'browserName': 'chrome',
        'platform': 'ANY',
        'version': 'ANY',
        /*chromeOptions: {
                args: ["--headless", "--disable-gpu", "--window-size=800x600"]
            }*/
        'chromeOptions': {
            w3c: false,
            useAutomationExtension: false,
            // Get rid of --ignore-certificate yellow warning
            args: ['--no-sandbox', '--test-type=browser', '--disable-extensions', '--disable-plugins'],

        }
    },
    useAllAngular2AppRoots: true,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 150000,
        stopSpecOnExpectationFailure: true,
        realtimeFailure: true
    },

    onPrepare: function () {
       
        console.log("**********************************************");
        console.log("*******Running Hoge UI Automation Test********");
        console.log("**********************************************");

        global.browserinstance = browser;
        browser.driver.manage().timeouts().implicitlyWait(1000);
        browser.manage().window().maximize();
        global.presenceOf = protractor.ExpectedConditions.presenceOf;
        global.EC = protractor.ExpectedConditions;
        global.downloadsPath = downloadsPath;
        global.callerTC = "";

        global.isAngularSite = function (flag) {
            browserinstance.ignoreSynchronization = !flag;
        };

        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports',
            takeScreenshotsOnlyOnFailures: true,
            cleanDestination: false,
            fileName: "TestReport",
            fileNameDateSuffix: true
         }));

    },


    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            ostype = caps.get('platform');
            osversion = os.release();
            osplatform = os.platform();

        });
    }
}

