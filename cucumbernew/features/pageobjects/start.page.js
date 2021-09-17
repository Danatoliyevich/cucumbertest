const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchfield () { return $('//div[@class="navbar__inner"]//span[@class="DocSearch-Button-Container"]')}
    get finsearchfield () { return $("//input[@id='docsearch-input']")}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchtext(textneed) {
        
        await this.finsearchfield.setValue(textneed);
        await browser.pause(3000);
        

    }

    async clickfield() {
        await this.searchfield.click();
        
        await browser.pause(3000);

    }    

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new StartPage();
