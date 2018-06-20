const LoginPage = require('../page_objects/login_page');
const SecureAreaPage = require('../page_objects/secure_area_page');

const username = 'tomsmith';
const password = 'SuperSecretPassword!'

describe('The Internet', function () {
    it('form authentication without Page Objects', function () {
        browser.url('/login');
        browser.setValue('input#username', username);
        browser.setValue('input#password', password);
        browser.click('form#login i');
        browser.getTitle().should.be.equal('The Internet');
        browser.isVisible('div#flash');
        browser.getText('div#flash').should.contain('You logged into a secure area!');
        browser.click('div#content a > i');
    });

    it('form authentication with Page Objects', function () {
        LoginPage.open();

        LoginPage.checkHorizontalBar();
        LoginPage.checkFooterText();

        LoginPage.checkTitleText();
        LoginPage.login(username, password);

        SecureAreaPage.verifyLoginSuccess();
        SecureAreaPage.checkHorizontalBar();
        SecureAreaPage.checkFooterText();
        SecureAreaPage.logout();
    });

    it('cannot access Secure Area without logging in', function() {
        SecureAreaPage.open();
        LoginPage.verifyLoginBlocked();
    })
});