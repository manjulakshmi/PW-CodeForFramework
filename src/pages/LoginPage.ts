import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    //1. private locators
    private readonly emailId : Locator;
    private readonly password : Locator;
    private readonly loginBtn : Locator;
    private readonly forgottenPwdLink : Locator;
    private readonly loginErrorMsg : Locator;
    private readonly returningCustHeader : Locator;
    private readonly orderHistoryLnk : Locator;

    //2. initialize these locators using constructor
    constructor(page:Page)
    {
        super(page);
        this.emailId = page.getByRole('textbox',{name:'E-Mail Address'});
        this.password = page.getByRole('textbox',{name:'Password'});
        this.loginBtn = page.getByRole('button',{name:'Login'});
        this.forgottenPwdLink = page.getByRole('link',{name:'Forgotten Password'}).first();
        this.loginErrorMsg = page.locator('.alert.alert-danger.alert-dismissible');
        this.returningCustHeader = page.getByRole('heading',{name:'Returning Customer'});
        this.orderHistoryLnk = page.getByRole('link',{name:'Order History'}).first();
    }

    //public actions(mtds)/behv:Encapsulation
    async gotoLoginPage(): Promise<void>
    {
         await this.page.goto('opencart/index.php?route=account/login')
    }

    async getLoginPageTitle():Promise<string>{
        return await this.page.title();
    }

    async isForgottenPwdLinkExists():Promise<boolean>
    {
        return await this.forgottenPwdLink.isVisible();
    }

    async doLogin(username:string,password:string):Promise<void>
    {
        console.log(`user creds are ${username} - ${password}`);
        await this.emailId.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

     async iSInvalidLoginErrorDisplayed():Promise<boolean>
    {
        return await this.loginErrorMsg.isVisible();
    }

    async orderHistoryLinkExist():Promise<boolean>
    {
        return await this.orderHistoryLnk.isVisible();
    }
    
    async headerReturningCustExists():Promise<boolean>
    {
        return await this.returningCustHeader.isVisible();
    }
}