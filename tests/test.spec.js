const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../spec/login.page');
//const {AuthorizedPage} = require('../spec/authorized.page')
const {SearchPage} = require('../spec/search.page')

test('Authorization on site using valid cred', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('');
    await loginPage.login('testLQ', 'testLQ');
    await expect(loginPage.activeUser).toContainText('testLQ');
    await expect(loginPage.myAccount).toBeVisible();
    // await page.screenshot({ path: 'img/screenshot1.jpeg' });
    // await page.locator('.my-account').screenshot({ path: 'img/screenshot2.jpeg' });
    // await page.locator('a.user.active').screenshot({ path: 'img/screenshot3.jpeg' });
});

test('Check login without entering pass', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('');
    await loginPage.loginFieldChecked();
    await expect(loginPage.errorMsg).toBeVisible();
    // await page.screenshot({ path: 'img/screenshot4.jpeg' });
    // await page.locator('#flash_error').screenshot({ path: 'img/screenshot5.jpeg' });
})

test('Check login without entering any cred', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('');
    await loginPage.emptyFieldsLogPwd();
    await expect(loginPage.errorMsg).toBeVisible();
    // await page.screenshot({ path: 'img/screenshot6.jpeg' });
    // await page.locator('#flash_error').screenshot({ path: 'img/screenshot7.jpeg' });
});

test('Checking filter headers', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto('');
    await searchPage.chkHeadedFltr();
    await expect(searchPage.dropDwnMenu).toBeVisible();
    // await page.screenshot({ path: 'img/screenshot8.jpeg' });
    // await page.locator('.small').screenshot({ path: 'img/screenshot9.jpeg' });
    // await page.locator('#search-types >> text=Issues').screenshot({ path: 'img/screenshot10.jpeg' });
    // await page.locator('#search-types >> text=News').screenshot({ path: 'img/screenshot11.jpeg' });
    // await page.locator('text=Changesets').screenshot({ path: 'img/screenshot12.jpeg' });
    // await page.locator('text=Wiki pages').screenshot({ path: 'img/screenshot13.jpeg' });
    // await page.locator('text=Messages').screenshot({ path: 'img/screenshot14.jpeg' });
    // await page.locator('text=Redmine plugins').screenshot({ path: 'img/screenshot15.jpeg' });
    // await page.locator('#scope').screenshot({ path: 'img/screenshot16.jpeg' });
})

test('Check sorting by filter names', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto('');
    await searchPage.searchPageFilters();
    await expect(searchPage.searchField).toBeVisible();
    await expect(searchPage.searchFld).toContainText('Search');
    // await page.locator('.small').screenshot({ path: 'img/screenshot17.jpeg' });
    // await page.locator("//h2[contains(text(),'Search')]").screenshot({ path: 'img/screenshot18.jpeg' });
})
