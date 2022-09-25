const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../spec/login');
const {SearchPage} = require('../spec/search')

test('Authorization on site using valid cred', async ({ page }) => {
    const loginUser = new LoginPage(page);
    await loginUser.goto();
    await loginUser.getStarted();
    //await page.screenshot({ path: 'img/screenshot1.jpeg' });
    // await page.locator("//a[contains(text(),'testLQ')]").screenshot({ path: 'img/screenshot2.jpeg' });
    // await page.locator('.my-page').screenshot({ path: 'img/screenshot02.jpeg' });
});

test('Check login without entering any cred', async ({ page }) => {
    const loginUser = new LoginPage(page);
    await loginUser.goto();
    await loginUser.getStart();
    // await page.locator('#flash_error').screenshot({ path: 'img/screenshot3.jpeg' });
});

test('Check login without entering pass', async ({ page }) => {
    const loginUser = new LoginPage(page);
    await loginUser.goto();
    await loginUser.getFillLoggin();
    // await page.locator('#flash_error').screenshot({ path: 'img/screenshot4.jpeg' });
})

test('Checking filter headers', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.getStart();
    // await page.screenshot({ path: 'img/screenshot5.jpeg' });
    //await page.locator('.small').screenshot({ path: 'img/screenshot002.jpeg' });
    // await page.locator('#search-types >> text=Issues').screenshot({ path: 'img/screenshot6.jpeg' });
    // await page.locator('#search-types >> text=News').screenshot({ path: 'img/screenshot7.jpeg' });
    // await page.locator('text=Changesets').screenshot({ path: 'img/screenshot8.jpeg' });
    // await page.locator('text=Wiki pages').screenshot({ path: 'img/screenshot9.jpeg' });
    // await page.locator('text=Messages').screenshot({ path: 'img/screenshot10.jpeg' });
    // await page.locator('text=Redmine plugins').screenshot({ path: 'img/screenshot11.jpeg' });
})

test('Check sorting by filter names', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.getSearchFielterTest();
})