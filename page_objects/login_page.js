const Page = require('../page_objects/page');

class LoginPage extends Page {

  /**
   * Elements
   */
  usernameInput() {
    return browser.element('input#username');
  }
  
  passwordInput() {
    return browser.element('input#password');
  }

  loginButton() {
    return browser.element('//button[contains(., "Login")]');
  }

      /**
     * Functions
     */
  open() {
    super.open('login') //this will append `login` to the baseUrl to form complete URL
  }

  waitForloginPageToLoad() {
    if (!this.usernameInput().isVisible()) {
      this.usernameInput().waitForVisible();
    }
  }

  login(username, password) {
    this.waitForloginPageToLoad();
    this.usernameInput().setValue(username);
    this.passwordInput().setValue(password);
    this.loginButton().click();
    browser.pause(2000);
  }
}

module.exports = LoginPage