const { expect } = require('@playwright/test');

exports.SearchPage = class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchField = page.locator('.small');
        this.tasksBtn = page.locator('#search-types >> text=Issues');
        this.newsBtn = page.locator('#search-types >> text=News');
        this.changesBtn = page.locator('text=Changesets');
        this.pageWikiBtn = page.locator('text=Wiki pages');
        this.messageBtn = page.locator('text=Messages');
        this.redPlugBtn = page.locator('text=Redmine plugins');
        this.dropDwnMenu = page.locator('#scope')
        this.searchFld = page.locator("//h2[contains(text(),'Search')]");

    }

    async goto(path) {
        await this.page.goto(`/${path}`);
    }

    async chkHeadedFltr() {
        await this.searchField.click();
        await this.searchField.press('Enter');
        await this.tasksBtn.isVisible();
        await this.newsBtn.isVisible();
        await this.changesBtn.isVisible();
        await this.pageWikiBtn.isVisible();
        await this.messageBtn.isVisible();
        await this.redPlugBtn.isVisible();
    }
    
    async searchPageFilters() {
        await this.searchField.click();
        await this.searchField.fill('Download');
        await this.searchField.press('Enter');
        // await this.page.screenshot({ path: 'img/screenshot12.jpeg' });
        await this.tasksBtn.click();
        // await this.page.screenshot({ path: 'img/screenshot13.jpeg' });
        await this.newsBtn.click();
        // await this.page.screenshot({ path: 'img/screenshot14.jpeg' });
        await this.changesBtn.click();
        // await this.page.screenshot({ path: 'img/screenshot15.jpeg' });
        await this.pageWikiBtn.click();
        // await this.page.screenshot({ path: 'img/screenshot16.jpeg' });
        await this.messageBtn.click();
        // await this.page.screenshot({ path: 'img/screenshot17.jpeg' });
        await this.redPlugBtn.click();
        // await this.page.screenshot({ path: 'img/screenshot18.jpeg' });
    }


    async pageObjectModel() {
        await this.chkHeadedFltr();
        await this.searchPageFilters();
  }


}

