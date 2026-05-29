import { Page, expect } from "@playwright/test";
import { doesNotThrow } from "node:assert";
import { stat } from "node:fs";

export class LeadPage {

    page: Page;

    //Locators:
    loc_dropdown_salutationtype = '//select[@name="salutationtype"]';
    loc_textbox_first_name = '//input[@name="firstname"]';
    loc_textbox_last_name = '//input[@name="lastname"]';
    loc_textbox_company_name = '//input[@name="company"]';
    loc_textbox_designatmion = '//input[@name="designation"]';
    loc_dropdown_leadsource = '//select[@name="leadsource"]';
    loc_dropdown_industry = '//select[@name="industry"]';
    loc_dropdown_leadstatus = '//select[@name="leadstatus"]';
    loc_dropdown_rating = '//select[@name="rating"]';

    loc_textbox_annualrevenue = '//input[@name="annualrevenue"]';
    loc_textbox_noofemployee = '//input[@name="noofemployees"]';
    loc_textbox_yahooid = '//input[@name="yahooid"]';
    loc_textbox_phone = '//input[@name="phone"]';
    loc_textbox_mobile = '//input[@name="mobile"]';
    loc_textbox_fax = '//input[@name="fax"]';
    loc_textbox_email = '//input[@name="email"]';
    loc_textbox_website = '//input[@name="website"]';
    loc_textarea_lane = '//textarea[@name="lane"]';
    loc_textbox_city = '//input[@name="city"]';
    loc_textbox_code = '//input[@name="code"]';
    loc_textbox_country = '//input[@name="country"]';
    loc_textbox_state = '//input[@name="state"]';
    loc_textarea_description = '//textarea[@name="description"]';

    loc_btn_save = '//input[@name="button"]';
    loc_txt_lastName = '//td[contains(text(),"Last Name")]/following::td[1]';
    loc_txt_company = '//td[contains(text(),"Company")]/following::td[1]';
    loc_btn_search = '//input[@name="button" and @value="Search"]';
    loc_txt_name = '(//td[contains(text(),"Lead List")]/following::tr[@class="oddListRow"]/td/a)[1]';
    loc_edit_lead_lnk = '//tr[@class="oddListRow"]/td/a[contains(text(),"edit")]';
    loc_leadname_lnk = '//tr[@class="oddListRow"]/td/a[contains(text(),"Smith")]';
    loc_txt_salutationtype = '//td[contains(text(),"First Name:")]/following::td[1]';
    loc_txt_industry = '//td[contains(text(),"Industry:")]/following::td[1]';
    loc_lnk_advanced_search = '//a[text()="Advanced"]';
    loc_dropdown_assignedto ='//select[@name="assigned_user_id"]';
    loc_btn_advanced_search= '//td[contains(text(),"Lead Search")]/following::input[@value="Search"]';
    constructor(page: Page) {
        this.page = page;
    }

    async createNewLead(salutationtype: string, firstname: string, lastname: string, company: string,
        annualrevenue: string, designation: string, industry: string,
        leadsource: string, noofemployees: string, yahooid: string, phone: string,
        mobile: string, fax: string, email: string, website: string, leadstatus: string, rating: string, lane: string, city: string,
        code: string, country: string, state: string, description: string

    ) {
        this.selectSalutationtype(salutationtype);
        this.setFirstName(firstname);
        this.setLastName(lastname);
        this.setCompany(company);
        this.setDesignation(designation);
        this.selectLeadsource(leadsource);
        this.selectIndustry(industry);
        this.setAnnualRevenue(annualrevenue);
        this.setNoOfEmployee(noofemployees);
        this.setYahooid(yahooid);
        this.setPhone(phone);
        this.setMobile(mobile);
        this.setFax(fax);
        this.setEmail(email);
        this.setWebsite(website);
        this.selectLeadstatus(leadstatus);
        this.selectRating(rating);
        this.setStreet(lane);
        this.setCity(city);
        this.setState(state);
        this.setPostalCode(code);
        this.setCountry(country);
        this.setDescription(description);

        this.clickSave();
    }

    async selectSalutationtype(salutationtype: string) {
        await this.page.locator(this.loc_dropdown_salutationtype).selectOption(salutationtype);
    }

    async setFirstName(firstname: string) {
        await this.page.fill(this.loc_textbox_first_name, firstname)
    }
    async setLastName(lastname: string) {
        await this.page.fill(this.loc_textbox_last_name, lastname);

    }

    async setCompany(company: string) {
        await this.page.fill(this.loc_textbox_company_name, company);
    }

    async setDesignation(designation: string) {
        await this.page.fill(this.loc_textbox_designatmion, designation);
    }

    async selectLeadsource(leadsource: string) {
        await this.page.locator(this.loc_dropdown_leadsource).selectOption(leadsource);
    }

    async selectIndustry(industry: string) {
        
        await this.page.locator(this.loc_dropdown_industry).selectOption(industry);
    }

    async setAnnualRevenue(annualrevenue: string) {
        await this.page.fill(this.loc_textbox_annualrevenue, annualrevenue);
    }

    async setNoOfEmployee(noofemployees: string) {
        await this.page.fill(this.loc_textbox_noofemployee, noofemployees);
    }

    async setYahooid(yahooid: string) {
        await this.page.fill(this.loc_textbox_yahooid, yahooid);
    }

    async setPhone(phone: string) {
        await this.page.fill(this.loc_textbox_phone, phone);
    }
    async setMobile(mobile: string) {
        await this.page.fill(this.loc_textbox_mobile, mobile);
    }

    async setFax(fax: string) {
        await this.page.fill(this.loc_textbox_fax, fax);
    }

    async setEmail(email: string) {
        await this.page.fill(this.loc_textbox_email, email);
    }

    async setWebsite(website: string) {
        await this.page.fill(this.loc_textbox_website, website);
    }

    async selectLeadstatus(leadstatus: string) {
        await this.page.locator(this.loc_dropdown_leadstatus).selectOption(leadstatus);
    }

    async selectRating(rating: string) {
        await this.page.locator(this.loc_dropdown_rating).selectOption(rating);
    }

    async setStreet(lane: string) {
        await this.page.fill(this.loc_textarea_lane, lane);
    }

    async setCity(city: string) {
        await this.page.fill(this.loc_textbox_city, city);
    }

    async setState(state: string) {
        await this.page.fill(this.loc_textbox_state, state);
    }

    async setPostalCode(code: string) {
        await this.page.fill(this.loc_textbox_code, code);
    }

    async setCountry(country: string) {
        await this.page.fill(this.loc_textbox_country, country)
    }
    async setDescription(description: string) {
        await this.page.fill(this.loc_textarea_description, description);
    }

    async clickSave() {
        await this.page.locator(this.loc_btn_save).nth(0).click();
    }

    async isLastNameDisplayed(): Promise<boolean | null> {
        const result = this.page.locator(this.loc_txt_lastName);
        await result.waitFor({ state: 'visible' });
        return this.page.isVisible(this.loc_txt_lastName);
    }

    async isCompanyDisplayed(): Promise<boolean | null> {
        const result = this.page.locator(this.loc_txt_company);
        await result.waitFor({ state: 'visible' });
        return this.page.isVisible(this.loc_txt_company);
    }

    async searchLeadFirstName(firstname:string)
    {
        await this.page.locator(this.loc_textbox_first_name).nth(1).fill(firstname);
    }
    async searchLeadLastName(lastname:string)
    {
        await this.page.locator(this.loc_textbox_last_name).nth(1).fill(lastname);
    }

    async searchbyCompany(lastname:string)
    {
        await this.page.locator(this.loc_textbox_company_name).nth(1).fill(lastname);
    }
    async clickSearch()
    {
       await this.page.click(this.loc_btn_search);
    }

    async isLeadFirstNameVisible():Promise<boolean|null>
    {
        const textName = await this.page.locator(this.loc_txt_name).textContent();
        console.log(textName);
        return await this.page.locator(this.loc_txt_name).isVisible();
    }

    async isLeadLastNameVisible():Promise<boolean|null>
    {
      try{
        await this.page.locator(this.loc_txt_name).waitFor({state:"visible",timeout: 3000});
        const textName = await this.page.locator(this.loc_txt_name).textContent();
        console.log(textName);
        return await this.page.locator(this.loc_txt_name).isVisible();   
      }
      catch(error){
        console.log("Lead serach failed or element not found");
        return false;
      }
      
        
    }

    async clickEditLeadLink()
    {
        await this.page.click(this.loc_edit_lead_lnk);
    }

    async editExistingLead(salutationtype:string, industry: string) 
    {
        await this.selectSalutationtype(salutationtype);
        await this.selectIndustry(industry);
        await this.clickSave();
    }

    async viewLead(){
        await this.page.click(this.loc_leadname_lnk);
    }

    async getSaluationType():Promise<string|null>
    {
        return this.page.locator(this.loc_txt_salutationtype).textContent()
    }

    async getIndustry():Promise<string|null>
    {
        return this.page.locator(this.loc_txt_industry).textContent()
    }

    async clickAdvancedLink()
    {
        await this.page.click(this.loc_lnk_advanced_search);
    }

    async selectAssignedto(name: string): Promise<void> {
        const dropdown = this.page.locator(this.loc_dropdown_assignedto);
        const userid = await dropdown.selectOption({ label: name });   // select by label text
        //await this.page.waitForTimeout(3000);
        console.log('Selected value is',userid);
        await expect(dropdown).toHaveValue('1');  // confirm "admin" is selected
    }



    async clickAdvancedSearchButton()
    {
        
        await this.page.click(this.loc_btn_advanced_search);
    }
}