const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.loginBtn = page.locator('.login');
    this.loginFill = page.locator('#username');
    this.passFill = page.locator('#password');
    this.submiteBtn = page.locator('tr input[type="submit"]');
    this.myPageBtn = page.locator('.my-page');
    this.autorizChk = page.locator("//a[contains(text(),'testLQ')]");
    this.errorMsg = page.locator('#flash_error');
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }

  async getStarted() {
    await this.loginBtn.click();
    await this.loginFill.fill('testLQ');
    await this.passFill.fill('testLQ');
    await this.submiteBtn.click();
    await this.autorizChk.isVisible();
    await this.myPageBtn.isVisible();
  }

  async getStart() {
    await this.loginBtn.click();
    await this.loginFill.press('Control+A');
    await this.loginFill.press('Backspace');
    await this.passFill.press('Control+A');
    await this.passFill.press('Backspace');
    await this.submiteBtn.click();
    await this.errorMsg.isVisible();
}

  async getFillLoggin() {
    await this.loginBtn.click();
    await this.loginFill.fill('testLQ');
    await this.passFill.press('Control+A');
    await this.passFill.press('Backspace');
    await this.submiteBtn.click();
    await this.errorMsg.isVisible();
  }
  
  async pageObjectModel() {
    await this.getStarted();
    await this.getStart();
    await this.getFillLoggin();
  }
}


