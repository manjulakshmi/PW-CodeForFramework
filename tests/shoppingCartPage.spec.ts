import {test,expect} from '../src/fixtures/pagefixtures'
import { HomePage } from '../src/pages/HomePage';
import { ProductInfoPage } from '../src/pages/ProductInfoPage';
import { ShoppingCartPage } from '../src/pages/ShoppingCartPage';

test.beforeEach(async({loginPage})=>
{
await loginPage.gotoLoginPage();
await loginPage.doLogin('pwapril@pw.com','pw123');
});


test('Verify product added In Shopping cart',async({homePage,productInfoPage,shoppingCartPage,searchResultsPage})=>
{
 await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    productInfoPage.clickOnShoppingCartLink();
    let prodName = shoppingCartPage.productNameinShoppingCart();
    expect(prodName).toBe('MAcBook Pro');

})


test('verify number of products in cart',async({homePage,productInfoPage,shoppingCartPage,searchResultsPage})=>
{
 await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    productInfoPage.clickOnShoppingCartLink();
    expect(await shoppingCartPage.productCountInShoppingCart()).toBe(1);

})