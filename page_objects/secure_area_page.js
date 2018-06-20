const Page = require('../page_objects/page');

class SecureAreaPage extends Page {

    /**
     * Elements
     */
    secureAreaDiv() {
        return browser.element('div#flash');
    }

    logoutButton() {
        return browser.element('div#content a > i');
    }

    /**
     * Functions
     */
    open() {
        super.open('secure')
    }

    verifyLoginSuccess() {
        this.secureAreaDiv().isVisible();
        this.secureAreaDiv().getText().should.contain('You logged into a secure area!');
    }

    logout() {
        this.logoutButton().click();
    }
}

module.exports = SecureAreaPage