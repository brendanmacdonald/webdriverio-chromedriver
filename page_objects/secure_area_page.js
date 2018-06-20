const Page = require('../page_objects/page');

class SecureAreaPage extends Page {

    /**
     * Elements
     */
    get secureAreaDiv() {
        return browser.element('div#flash');
    }

    get logoutButton() {
        return browser.element('div#content a > i');
    }

    open() {
        super.open('secure')
    }

    verifyLoginSuccess() {
        this.secureAreaDiv.isVisible();
        this.secureAreaDiv.getText().should.contain('You logged into a secure area!');
    }
}

module.exports = SecureAreaPage