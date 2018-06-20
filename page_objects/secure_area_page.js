let mixin = require('xmultiple');
const Page = require('../page_objects/page');
const Footer = require('../page_objects/common/footer');
const Flash = require('../page_objects/common/flash');

class SecureAreaPage extends mixin(Page, Footer, Flash) {

    get secureAreaDiv() { return browser.element('div#flash'); }
    get logoutButton() { return browser.element('div#content a > i'); }

    open() {
        super.open('secure')
    }

    verifyLoginSuccess() {
        this.checkTextInFlash('You logged into a secure area!');
    }

    logout() {
        this.logoutButton.click();
    }
}

module.exports = new SecureAreaPage();