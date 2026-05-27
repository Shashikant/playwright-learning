import { Page, expect } from "@playwright/test";

export class HomePage{
    page:Page;

    constructor(page:Page){
        this.page = page;
    }

    //Locators:
    loc_lnk_logout = '//a[text()="Logout"]';
    

    async clickLogout()
    {
        await this.page.click(this.loc_lnk_logout);
    }

    

}