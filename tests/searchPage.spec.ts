import {test,expect} from '../src/fixtures/pagefixtures'

test.beforeEach(async({loginPage})=>
{
await loginPage.gotoLoginPage();
await loginPage.doLogin('pwapril@pw.com','pw123');
});

test('verify search',async({homePage,searchResultsPage,page})=>
{
    homePage.doSearch('MacBook');
page.waitForTimeout(10000);
    let resultCount = await searchResultsPage.getProductSearchResultCount();
    console.log('search result count : ',resultCount);
    expect(resultCount).toBe(3);
})


test('user able to land on product page',async({homePage,searchResultsPage,page})=>
{
homePage.doSearch('MacBook');
await searchResultsPage.selectProduct('MacBook Pro');
expect(await page.title()).toBe('MacBook Pro');
})





