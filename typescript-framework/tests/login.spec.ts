import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";

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
  //console.log(isLogoDisplayed);
  expect(isLogoDisplayed).toBe(true);
  await page.close();

})

test('Verify_invalid_password_TC_003', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await loginPage.setUsername('admin');
  await loginPage.setPassword('admin1@23');
  await loginPage.clickLogin();
  const isErrorMessage = await loginPage.isErrorMessage();
  expect(isErrorMessage).toBe(true);
  await page.close();
})

test('Verify_invalid_userid_TC_004', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await loginPage.setUsername('admin123');
  await loginPage.setPassword('admin');
  await loginPage.clickLogin();
  const isErrorMessage = await loginPage.isErrorMessage();
  expect(isErrorMessage).toBe(true);
  await page.close();

})

test('Verify_blank_userid_TC_005', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await loginPage.setUsername('');
  await loginPage.setPassword('admin');
  await loginPage.clickLogin();
  const isErrorMessage = await loginPage.isErrorMessage();
  expect(isErrorMessage).toBe(true);
  await page.close();

})

test('Verify_blank_password_TC_005', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await loginPage.setUsername('admin');
  await loginPage.setPassword('');
  await loginPage.clickLogin();
  const isErrorMessage = await loginPage.isErrorMessage();
  expect(isErrorMessage).toBe(true);
  await page.close();

})

test('Verify_valid_login_details_TC005', async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await loginPage.setUsername('admin');
  await loginPage.setPassword('admin');
  await loginPage.clickLogin();
  const isWelcomeMsg = await homePage.isWelcomeMsg();
  expect(isWelcomeMsg).toBe(true);
  await page.close();
})
