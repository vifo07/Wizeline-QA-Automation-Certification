import {Selector, t} from 'testcafe';


class CheckOut_OverviewPage{

    constructor(){

    
        this.overviewheader=Selector('.title');
        this.confirmationheader=Selector('.complete-header');
        this.product_name=Selector('.inventory_item_name');
        this.productlistcheckout=[];
        


    }
    

    async getAddedProducts(addtocartselection){
        var i;
        this.productlistcheckout=[]

        for (i = 0; i < addtocartselection; i++) {
      
            this.productname=this.product_name.nth(i);
            let productnametext= await this.productname.textContent;
            this.productlistcheckout.push(productnametext);
        }
    
    return this.productlistcheckout;
    }


}
export default  new CheckOut_OverviewPage();
