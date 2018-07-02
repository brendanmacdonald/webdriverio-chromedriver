exports.config = {
    specs: [
        __dirname + '/tests/**'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-gpu']
        }
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'https://the-internet.herokuapp.com/',
    waitforTimeout: 10000, // Default timeout for all waitFor* commands.
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    port: 9515,
    path: '/',
    chromeDriverLogs: './logs',
    framework: 'mocha',
    reporters: ['dot', 'allure', 'spec'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        },
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    },
    before: function () {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.should();
    }
}