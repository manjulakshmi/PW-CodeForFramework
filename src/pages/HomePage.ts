import { Locator ,Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

    //pvt locator
    private readonly logoutLnk : Locator;
    private readonly headers : Locator;
    private readonly searchBox : Locator;
    private readonly searchIcon : Locator;

    constructor(page:Page)
    {
        super(page);
        this.headers = page.getByRole('heading',{level:2});
        this.logoutLnk = page.getByRole('link',{'name': 'Logout' });
        this.searchBox = page.getByRole('textbox',{name: 'Search' });
        this.searchIcon = page.locator('#search button');
    }

async isLogoutLnkExists():Promise<boolean>
{
    return await this.logoutLnk.isVisible();
}

async gethomepageHeader():Promise<string[]>
{
    return await this.headers.allInnerTexts();
}


async getHomePageTitle():Promise<string>
{
    return await this.page.title();
}


async doSearch(searchKey:string):Promise<void>
{
    console.log('search key is :',searchKey);
   await this.searchBox.fill(searchKey); 
  
   await this.searchIcon.click();
    this.page.waitForTimeout(10000);
}


}
