import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { getTestData } from "../utils/jsonReader";


let homePage: HomePage;
let loginPage: LoginPage;

test('Verify_title_TC001', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("vtiger CRM - Commercial Open Source CRM");
  await page.close();
});

test('Verify_Logo_LoginPage_TC002', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  const isLogoDisplayed = await loginPage.isLogoDisplayed();
  expect(isLogoDisplayed).toBe(true);
  await page.close();

})

test('Verify_invalid_password_TC_003', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  const testData = await getTestData('./test-data/users.json', 'Verify_invalid_password_TC_003')
  await loginPage.setUsername(testData.username);
  await loginPage.setPassword(testData.password);
  await loginPage.clickLogin();
  const isErrorMessage = await loginPage.isErrorMessage();
  expect(isErrorMessage).toBe(true);
  await page.close();
})

test('Verify_invalid_userid_TC_004', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  const testData = await getTestData('./test-data/users.json', 'Verify_invalid_userid_TC_004')

  await loginPage.setUsername(testData.username);
  await loginPage.setPassword(testData.password);
  await loginPage.clickLogin();
  const isErrorMessage = await loginPage.isErrorMessage();
  expect(isErrorMessage).toBe(true);
  await page.close();

})

test('Verify_blank_userid_TC_005', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  const testData = await getTestData('./test-data/users.json', 'Verify_blank_userid_TC_005')

  await loginPage.setUsername(testData.username);
  await loginPage.setPassword(testData.password);
  await loginPage.clickLogin();
  const isErrorMessage = await loginPage.isErrorMessage();
  expect(isErrorMessage).toBe(true);
  await page.close();

})

test('Verify_blank_password_TC_006', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  const testData = await getTestData('./test-data/users.json', 'Verify_blank_password_TC_006')

  await loginPage.setUsername(testData.username);
  await loginPage.setPassword(testData.password);
  await loginPage.clickLogin();
  const isErrorMessage = await loginPage.isErrorMessage();
  expect(isErrorMessage).toBe(true);
  await page.close();

})

test('Verify_valid_login_details_TC007', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  const testData = await getTestData('./test-data/users.json', 'Verify_valid_login_details_TC007')

  await loginPage.setUsername(testData.username);
  await loginPage.setPassword(testData.password);
  await loginPage.clickLogin();
  const isWelcomeMsg = await homePage.isWelcomeMsg();
  expect(isWelcomeMsg).toBe(true);
  await page.close();
})

test('Verify_password_field_hides_entered_characters_TC008', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  const testData = await getTestData('./test-data/users.json', 'Verify_password_field_hides_entered_characters_TC008')

  await loginPage.setUsername(testData.username);
  await loginPage.setPassword(testData.password);
  const passwordtype = await loginPage.passwordFieldType();
  console.log(passwordtype);
  expect(passwordtype).toBe("password");
  await page.close();
})