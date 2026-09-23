import {test,expect} from '../src/fixtures/pagefixtures';
import {CsvHelper}


test.beforeEach(async({loginPage , page})=>{
await loginPage.gotoLoginPage();
})

test('login page title test',async ({loginPage})=>
{

let pagetitle = await loginPage.getLoginPageTitle();
console.log('Login Page title : ',pagetitle);
expect(pagetitle).toBe('Account Login');
});

test('forgotpwd link exists',async ({loginPage})=>
{
expect(await loginPage.isForgottenPwdLinkExists()).toBeTruthy();
});

test('UserAble to login',async ({loginPage,homePage})=>
{
await loginPage.doLogin('pwapril@pw.com','pw123');
//assesrtion, soft assert because we wrote 2 assertion
expect.soft(await homePage.isLogoutLnkExists()).toBeTruthy();
expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});

//invalid login
let testData = CsvHelper.readCsv('src/testdata/logindata.csv')
for(let row of testData){

test(`User notnAble to login with invalid credential-${row.username}-${row.password}`,async ({loginPage,homePage})=>
{
await loginPage.doLogin(row.username,row.password);

});
};

