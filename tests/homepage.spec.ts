import {test,expect} from '../src/fixtures/pagefixtures';





//to execute Tcs individually, we need login page also with homepage tcs, hence write hooks here
//to write tcs in homepage, user should be logged in to the application
test.beforeEach(async ({loginPage})=>
{
   
    await loginPage.gotoLoginPage();
    await loginPage.doLogin('pwapril@pw.com','pw123');

    
})

//Write test cases
test('homepagetitleTest',async({homePage})=>
{
 let homepageTitle = await homePage.getHomePageTitle();
 console.log('homepage title :',homepageTitle);
 //assertion
 expect(homepageTitle).toBe('My Account')
})


test('logOutLinkExists',async({homePage})=>
{
    expect(await homePage.isLogoutLnkExists()).toBeTruthy();
    
})

test('homePage header exists', async({homePage})=>
{
    let allHeaders:string[] = await homePage.gethomepageHeader();
    expect.soft(allHeaders).toHaveLength(4);
    expect.soft(allHeaders).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'

    ])
})
