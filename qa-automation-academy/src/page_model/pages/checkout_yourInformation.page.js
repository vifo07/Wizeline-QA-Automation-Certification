import {Selector, t} from 'testcafe';


class CheckOut_yourInformationPage{

    constructor(){

        
        this.checkoutfirstname=Selector('#first-name');
        this.checkoutlastname=Selector('#last-name');
        this.checkoutpostcodename=Selector('#postal-code');
        this.continuebutton=Selector("[name='continue']");
        
        this.errormissinginput=Selector('[data-test="error"]');
       
    
    }
    


    async fillUserInformation(firstname,lastname,postcode){
        if (firstname){
            await t.typeText(this.checkoutfirstname,firstname)
                .typeText(this.checkoutlastname,lastname)
                .typeText(this.checkoutpostcodename,postcode)
                .click(this.continuebutton);
        }
        else{
            await t.typeText(this.checkoutlastname,lastname)
                .typeText(this.checkoutpostcodename,postcode)
                .click(this.continuebutton);
        }

        
    }

    async fillIncompleteUserInformation(lastname,postcode){

        await t.typeText(this.checkoutlastname,lastname)
                .typeText(this.checkoutpostcodename,postcode)
                .click(this.continuebutton);
    }
    async verifyNavigateOverviewpage(){
        return await this.overviewheader.exists;

    }
    async errorInputRequiered(){
        return await this.errormissinginput.textContent;

    }

   

}
export default  new CheckOut_yourInformationPage();


