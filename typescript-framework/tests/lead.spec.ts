import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LeadPage } from "../pages/leadPage";
import { LoginPage } from "../pages/loginPage";
import { getTestData } from "../utils/jsonReader";
import { getCSVTestData } from "../utils/csvReader";

let homePage: HomePage;
let loginPage: LoginPage;
let leadPage: LeadPage;

test('Verify_Create_NewLead_Mandatory_Fields_TC001', async({page})=> {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    const testData = await getTestData('./test-data/leadData.json',"Verify_Create_NewLead_Mandatory_Fields_TC001");
    await loginPage.login(testData.username, testData.password);
    await homePage.clickNewLead();
    await leadPage.setLastName(testData.lastname);
    await leadPage.setCompany(testData.password);
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
    const testData = await getCSVTestData('./test-data/leadData.csv','Verify_Create_NewLead_All_Fields_TC002');
    await loginPage.login(testData.username, testData.password);
    await homePage.clickNewLead();
    await leadPage.selectSalutationtype(testData.salutationtype);
    await leadPage.setFirstName(testData.firstname);
    await leadPage.setLastName(testData.lastname);
    await leadPage.setCompany(testData.company);
    
    await leadPage.setDesignation(testData.designation);
    await leadPage.selectLeadsource(testData.leadsource);
    await leadPage.selectIndustry(testData.industry);
    await leadPage.setAnnualRevenue(testData.annualrevenue);
    await leadPage.setNoOfEmployee(testData.noofemployees);
    await leadPage.setYahooid(testData.yahooid);
    await leadPage.setPhone(testData.phone);
    await leadPage.setMobile(testData.mobile);
    await leadPage.setFax(testData.fax);
    await leadPage.setEmail(testData.email);
    await leadPage.setWebsite(testData.website);
    await leadPage.selectLeadstatus(testData.leadstatus);
    await leadPage.selectRating(testData.rating);
    
    await leadPage.setStreet(testData.lane);
    await leadPage.setState(testData.state);
    await leadPage.setCity(testData.city);
    await leadPage.setPostalCode(testData.code);
    await leadPage.setCountry(testData.country);

    await leadPage.setDescription(testData.description)


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
    const testData = await getTestData('./test-data/leadData.json',"Verify_Create_NewLead_Mandatory_Fields_From_Leads_Page_TC003")
    await loginPage.login(testData.username, testData.password);
    await homePage.clickLeads();
    await leadPage.setLastName(testData.lastname);
    await leadPage.setCompany(testData.company);
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
    const testData = await getTestData('./test-data/leadData.json','Verify_Search_Existing_Lead_by_Firstname_TC004')
    await loginPage.login(testData.username, testData.password);
    await homePage.clickLeads();
    await leadPage.searchLeadFirstName(testData.firstname)
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
    const testData = await getTestData('./test-data/leadData.json','Verify_Search_Existing_Lead_by_Lastname_TC005')
    await loginPage.login(testData.username, testData.password);
    await homePage.clickLeads();
    await leadPage.searchLeadLastName(testData.lastname);
    await leadPage.clickSearch();
    const name = await leadPage.isLeadLastNameVisible();
    expect(name).toBe(true);
    
    await page.close();
})


test('Verify_Search_Invalid_Lead_TC006', async({page})=> {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    const testData = await getTestData('./test-data/leadData.json','Verify_Search_Invalid_Lead_TC006')
    await loginPage.login(testData.username, testData.password);
    await homePage.clickLeads();
    await leadPage.searchLeadLastName(testData.lastname);
    await leadPage.clickSearch();
    const name = await leadPage.isLeadLastNameVisible()
    expect(name).toBe(false);
    await page.close();
})