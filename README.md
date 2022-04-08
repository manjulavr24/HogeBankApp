# Project Title: Protractor UI Automation for Hoge Bank application

The project includes tect cases to verify basic feature of the application.

# Prerequisites

Require node js, npm-6.14.5, Protractor-7.0.0 and protractor-jasmine2-html-reporter

# Instruction to install requirements

npm                                 - `npm install -g npm`
protractor                          - `npm install -g protractor`
protractor-jasmine2-html-reporter   - `npm install -g protractor-jasmine2-html-reporter`

# After installing Protrator Run below to start selenium server

`webdriver-manager update`
`webdriver-manager start`

# Steps to follow

1. All the required data are provided in the file `data/inputData.json`.
2. The element xpath, id or class name is stored in `locator/locatorinJson` folder. Each UI page is has seperate json file for stor element identifier.
3. `pages` folder contain common methods used for different test cases.
4. `test` folder has basic feature test of application
5. `reports` has generated html reports and screenshots.
6. `conf.js` has test, driver and browser configuration

# Running Test

`protractor conf.js`

