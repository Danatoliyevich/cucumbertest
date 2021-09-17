const { Given, When, Then } = require('@wdio/cucumber-framework');

const StartPage = require('../pageobjects/start.page');

const textneed = 'cucumber'




Given(/^I am on the login page$/, async () => {
    await StartPage.open();
    await browser.pause(5000);
});

When(/^I click on search$/, async () => {
    StartPage.clickfield();
    await browser.pause(3000);
   
});


Then(/^I type text to search$/, async () => {
    StartPage.searchtext(textneed);
    await browser.pause(3000);
});

