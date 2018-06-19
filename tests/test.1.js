var config = require('../wdio.conf.js').config;

describe('webdriver.io page', function () {
    it('should have the right title - the fancy generator way', function () {
        browser.url(config.baseUrl);
        browser.getTitle().should.be.equal('WebdriverIO - WebDriver bindings for Node.js');
    });
});