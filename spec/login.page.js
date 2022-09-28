const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.loginBtn = page.locator('.login');
    this.loginField = page.locator('#username');
    this.pwdField = page.locator('#password');
    this.sbmLogBtn = page.locator('tr input[type="submit"]');   
    this.errorMsg = page.locator('#flash_error');
    this.activeUser = page.locator('a.user.active');
    this.myAccount = page.locator('.my-account');
    //this.myPageBtn = page.locator('.my-page');
    //this.autorizChk = page.locator("//a[contains(text(),'testLQ')]");
    //this.myAccount = page.locator('.my-account');
  }

  async goto(path) {
    await this.page.goto(`/${path}`);
  }

  async login({ login, pwd }) {
    await this.loginBtn.click();
    if (login) {
      await this.loginField.fill(login);
    }
    if (pwd) {
      await this.pwdField.fill(pwd);
    }
    await this.sbmLogBtn.click();
  }

  // async loginFieldChecked() {
  //   await this.loginBtn.click();
  //   await this.loginField.fill('testLQ');
  //   await this.sbmLogBtn.click();
  //   await this.errorMsg.isVisible();
  // }
  
  // async emptyFieldsLogPwd() {
  //   await this.loginBtn.click();
  //   await this.loginField.focus();
  //   await this.pwdField.focus();
  //   await this.sbmLogBtn.click();
  //   await this.errorMsg.isVisible();
  // } 
}





// Як зробити правильну валідацію?
// Якщо є можливість навести приклад на цьому завданні
// Негативні кейси до валідаціі, для них теж потрібні окреми методи? наприклад не заповнили логін, а тільки пасс. Якщо можна один приклад на цьому завданні
// Кілька РОМ в одному тесті ., синтаксис test('', async ({ page }) => {
                                        //const mainPage = new MainPage(page);
                                        //const loginPage = new LainPage(page);


  // async loginVal(login) {
  //   if (!login) {
  //     return false;
  //   }
  // };

  // async getMyPageBtn() {
  //     return this.myPageBtn
  // }