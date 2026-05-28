import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LeadPage } from "../pages/leadPage";
import { LoginPage } from "../pages/loginPage";

let homePage: HomePage;
let loginPage: LoginPage;
let leadPage: LeadPage;

test('Verify_Create_NewLead_Mandatory_Fields_TC001', async({page})=> {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    await loginPage.login("admin", "admin");
    await homePage.clickNewLead();
    await leadPage.setLastName("Nitin");
    await leadPage.setCompany("ExploreWorld");
    await leadPage.clickSave();
    const isLastNameDisplayed = await leadPage.isLastNameDisplayed();
    expect(isLastNameDisplayed).toBe(true)

    const isCompanyDisplayed = await leadPage.isCompanyDisplayed();
    expect(isCompanyDisplayed).toBe(true);

    await page.close();
})


test('Verify_Create_NewLead_All_Fields_TC002', async({page})=> {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    await loginPage.login("admin", "admin");
    await homePage.clickNewLead();
    await leadPage.selectSalutationtype('Mr.');
    await leadPage.setFirstName("Phil");
    await leadPage.setLastName("Jack");
    await leadPage.setCompany("Micronite");
    
    await leadPage.setDesignation("Manager");
    await leadPage.selectLeadsource("Direct Mail");
    await leadPage.selectIndustry("Chemicals");
    await leadPage.setAnnualRevenue("10000");
    await leadPage.setNoOfEmployee("35");
    await leadPage.setYahooid("willJack@yahoo.com");
    await leadPage.setPhone("3412345");
    await leadPage.setMobile("98234111");
    await leadPage.setFax("0001234");
    await leadPage.setEmail("phillJack@Game.com");
    await leadPage.setWebsite("Not Available");
    await leadPage.selectLeadstatus("Hot");
    await leadPage.selectRating("Acquired");
    
    await leadPage.setStreet("Market Street");
    await leadPage.setState("California");
    await leadPage.setCity("San Francisco");
    await leadPage.setPostalCode("94103");
    await leadPage.setCountry("United States");

    await leadPage.setDescription("Lead generated from LinkedIn campaign. Follow-up scheduled next week.")


    await leadPage.clickSave();
    const isLastNameDisplayed = await leadPage.isLastNameDisplayed();
    expect(isLastNameDisplayed).toBe(true)

    const isCompanyDisplayed = await leadPage.isCompanyDisplayed();
    expect(isCompanyDisplayed).toBe(true);

    await page.close();
})

test('Verify_Create_NewLead_Mandatory_Fields_From_Leads_Page_TC003', async({page})=> {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    await loginPage.login("admin", "admin");
    await homePage.clickLeads();
    await leadPage.setLastName("Vaibhav");
    await leadPage.setCompany("RR");
    await leadPage.clickSave();
    const isLastNameDisplayed = await leadPage.isLastNameDisplayed();
    expect(isLastNameDisplayed).toBe(true)

    const isCompanyDisplayed = await leadPage.isCompanyDisplayed();
    expect(isCompanyDisplayed).toBe(true);

    await page.close();
})

test('Verify_Search_Existing_Lead_by_Firstname_TC004', async({page})=> {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    await loginPage.login("admin", "admin");
    await homePage.clickLeads();
    await leadPage.searchLeadFirstName("Mary")
    await leadPage.clickSearch();
    const name = await leadPage.isLeadFirstNameVisible()
    expect(name).toBe(true);
    await page.close();
})

test('Verify_Search_Existing_Lead_by_Lastname_TC005', async({page})=> {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    await loginPage.login("admin", "admin");
    await homePage.clickLeads();
    await leadPage.searchLeadLastName("Smith")
    await leadPage.clickSearch();
    const name = await leadPage.isLeadLastNameVisible()
    expect(name).toBe(true);
    
    await page.close();
})


test('Verify_Search_Invalid_Lead_TC006', async({page})=> {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    await loginPage.login("admin", "admin");
    await homePage.clickLeads();
    await leadPage.searchLeadLastName("Shashi")
    await leadPage.clickSearch();
    const name = await leadPage.isLeadLastNameVisible()
    expect(name).toBe(false);
    await page.close();
})