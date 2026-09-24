
import {BasePage} from "./BasePage"
import {Page,Locator} from '@playwright/test';

export class ShoppingCartPage extends BasePage
{

private readonly productMacBookPro : Locator;  
private readonly quantity :Locator;

constructor(page:Page)
{
    super(page);
    this.productMacBookPro=page.getByRole('link',{name:'MacBook Pro'});
    this.quantity=page.locator('div.input-group.btn-block');
}

//verify the productName
async productNameinShoppingCart():Promise<string>
{
    return await this.productMacBookPro.innerText();
}

//verify product count
async productCountInShoppingCart():Promise<number>
{
    return await this.quantity.count();
}




}
