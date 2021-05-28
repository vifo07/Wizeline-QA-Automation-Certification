import {Selector, t} from 'testcafe';


class CheckOut_CompletePage{

    constructor(){

    
        this.finishbutton=Selector("[name='finish']");
        this.confirmationheader=Selector('.complete-header');

    }
    

   
    async completePurchase(){

        await t.click(this.finishbutton);
        return await this.confirmationheader.textContent;

    }

}
export default  new CheckOut_CompletePage();
