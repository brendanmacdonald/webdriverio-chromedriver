let mixin = require('xmultiple');
const Page = require('../page_objects/page');
const Footer = require('../page_objects/common/footer');
const Flash = require('../page_objects/common/flash');

class LoginPage extends mixin(Page, Footer, Flash) {

  get title() {
    return browser.element('//h2');
  }
  
  get username() {
    return browser.element("//input[@name='username']");
  }

  get password() {
    return browser.element("//input[@name='password']");
  }

  get loginButton() {
    return browser.element('//button[contains(., "Login")]');
  }

  get loginDiv() {
    return browser.element('div#flash');
  }

  open() {
    super.open('login') //this will append `login` to the baseUrl to form complete URL
  }

  getTitle() {
    this.title;
  }

  checkTitleText() {
    this.title.getText().should.be.equal('Login Page');
  }

  waitForloginPageToLoad() {
    if (!this.username.isVisible()) {
      this.username.waitForVisible();
    }
  }

  login(username, password) {
    this.waitForloginPageToLoad();
    this.username.setValue(username);
    this.password.setValue(password);
    this.loginButton.click();
    browser.pause(2000);
  }

  verifyLoginBlocked() {
    this.checkTextInFlash('You must login to view the secure area!');
  }
}

module.exports = new LoginPage();