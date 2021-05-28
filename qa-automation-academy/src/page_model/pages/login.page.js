import {Selector, t} from 'testcafe';


class LoginPage {
    constructor(){

            this.logininput=Selector('[name=user-name]');
            this.passwordinput=Selector('#password');
            this.loginButton=Selector('[type=submit]');
            this.loginerror=Selector('[data-test=error]');
            this.optionbutton=Selector(".bm-burger-button");
            this.logoutlink=Selector("#logout_sidebar_link");
            this.productheader=Selector(".product_label");
            this.shoppingcartbutton=Selector("a[href='./cart.html']");
            this.shoppingcartpageheader=Selector(".subheader");
            this.allitemslink=Selector('#inventory_sidebar_link');
    }

    async login (email,password){


        await t.typeText(this.logininput,email)
                .typeText(this.passwordinput,password)
                .click(this.loginButton);
    }

    async getLoginErrorMessage(){

    
        let errortext= await this.loginerror.textContent;
        return errortext;

    }

    



   



}

export default new LoginPage();
