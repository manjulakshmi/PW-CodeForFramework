import {BasePage} from "./BasePage"
import {Page,Locator} from '@playwright/test';

export class SearchResultsPage extends BasePage
{
private readonly searchResults : Locator;


constructor(page:Page)
{
    super(page);
    this.searchResults = page.locator('div.product-layout'); 
}

async getProductSearchResultCount():Promise<number>
{
    return await this.searchResults.count();
}

async selectProduct(productName:string):Promise<void>
{
console.log('Product name :',productName);
this.page.getByRole('link',{name:productName,exact:true}).first().click();
}











}