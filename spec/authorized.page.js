// const { expect } = require('@playwright/test');

// exports.AuthorizedPage = class AuthorizedPage{
//     constructor(page) {
//         this.page = page;
//         this.myAccount = page.locator('.my-account');
//         this.logOut = page.locator('.logout');
//         this.logAs = page.locator('#loggedas');
//         this.myPage = page.locator('.my-page');
//     }

//     async goto(path) {
//         await this.page.goto(`/${path}`);
//     }

//     async getmyAccount() {
//         await this.myAccount.isVisible();
//     }

//     async pageObjectModel() {
//         await this.getmyAccount();
//     }
// }   