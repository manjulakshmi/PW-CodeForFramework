import {test,expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginPage : LoginPage;
let homePage : HomePage;

test.beforeEach(async({page})=>
{
loginPage = new LoginPage(page)
await loginPage.gotoLoginPage();
homePage = new HomePage(page);
})

test('login page title test',async ({page})=>
{

let pagetitle = await loginPage.getLoginPageTitle();
console.log('Login Page title : ',pagetitle);
expect(pagetitle).toBe('Account Login');
});

test('forgotpwd link exists',async ({page})=>
{
expect(await loginPage.isForgottenPwdLinkExists()).toBeTruthy();
});

test('UserAble to login',async ({page})=>
{
await loginPage.doLogin('pwapril@pw.com','pw123');
//assesrtion, soft assert because we wrote 2 assertion
expect.soft(await homePage.getHomePageTitle).toBeTruthy();
expect.soft(await homePage.gethomepageHeader).toBe('My Account');
});