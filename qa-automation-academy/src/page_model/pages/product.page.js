
import {Selector, t} from 'testcafe';

class ProductPage{
    constructor(){
      
        this.productheader=Selector(".title");
        this.optionbutton=Selector(".bm-burger-button");
        this.logoutlink=Selector("#logout_sidebar_link");
        this.loginButton=Selector('[name="login-button"]');
        this.shoppingcartbutton=Selector(".shopping_cart_link");
        this.shoppingcartpageheader=Selector(".header_secondary_container > span");
        this.allitemslink=Selector('#inventory_sidebar_link');
        this.addtocartbutton=Selector('.pricebar > button ').nth(0);
        this.shoppingcartcount=Selector(".shopping_cart_link > span");
        this.productlist=[];
    }


    async isProductPageLoaded(){

        return  this.productheader.exists; 
    }


    async logOut(){
        await t.click(this.optionbutton)
                .click(this.logoutlink);
       
    }

    async goToShoppingCartPage(){
        await t.click(this.shoppingcartbutton);
     
   }

   async addtoCart(addtocartselection){
    var i;
    this.productlist=[];

    for (i = 0; i < addtocartselection; i++) {
      
        this.addtocartbutton=Selector('.pricebar > button ').nth(i);
        this.productname=Selector('.inventory_item_name').nth(i);
        let productnametext= await this.productname.textContent;
        this.productlist.push(productnametext)

        await t.click(this.addtocartbutton);
    }
    console.log(this.productlist);
    return this.productlist;


    
}


async verifyAddToCart(addtocartselection){
    let cartcount= await this.shoppingcartcount.textContent;
    if ((addtocartselection) == cartcount){
            return true;
    }
    else{

        return false;
    }


    
}








}

export default  new ProductPage();