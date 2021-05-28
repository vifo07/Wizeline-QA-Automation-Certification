import {Selector, t} from 'testcafe';


class YourCartPage{

    constructor(){

        this.checkoutbutton=Selector("[name='checkout']");
       
    

    }
    

    async checkoutClick(){
        await t.click(this.checkoutbutton);
    }

   
}
export default  new YourCartPage();
