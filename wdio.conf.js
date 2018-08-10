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
    },
    {
        maxInstances: 5,
        browserName: 'firefox',
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
    host: '127.0.0.1',
    port: 4444,
    path: '/wd/hub',
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