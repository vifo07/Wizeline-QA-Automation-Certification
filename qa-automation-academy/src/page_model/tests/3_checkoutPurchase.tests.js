import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';
import YourCartPage from '../pages/yourcart.page';
import CheckOut_yourInformationPage from '../pages/checkout_yourInformation.page';
import CheckOut_OverviewPage from '../pages/checkout_overview.page';
import CheckOut_CompletePage from '../pages/checkout_complete.page';

import {URLS} from '../data/Data'
import {CREDENTIALS} from '../data/Data'
import {MESSAGES} from '../data/Data'
import {VARIABLES} from '../data/Data'
import checkout_yourInformationPage from '../pages/checkout_yourInformation.page';


let productlistr=[]
fixture('Checkuout Purchase').page((`${URLS.BASE_PAGE}`))
.beforeEach(async t =>{
    await LoginPage.login(`${CREDENTIALS.VALID_USER.USERNAME}`,`${CREDENTIALS.VALID_USER.PWD}`);
    productlistr=await ProductPage.addtoCart(`${VARIABLES.PRODUCTSTOADD}`);
    await ProductPage.goToShoppingCartPage();
    await YourCartPage.checkoutClick();
});

test('Fill Users Info missing Firstname',async t =>{
    //NEGATIVE SCENARIO
    //from wrong email i picture it was wrong firstname
    await CheckOut_yourInformationPage.fillUserInformation("",`${VARIABLES.PERSONAL_DATA.LASTNAME}`,`${VARIABLES.PERSONAL_DATA.ZIPCODE}`);
    await t.expect(await CheckOut_yourInformationPage.errormissinginput.textContent).contains(`${MESSAGES.FIRSTNAME_MISSING_MSG}`);

});

test('Fill Users Info and navigate to overview page',async t =>{

    await CheckOut_yourInformationPage.fillUserInformation(`${VARIABLES.PERSONAL_DATA.FIRSTNAME}`,`${VARIABLES.PERSONAL_DATA.LASTNAME}`,`${VARIABLES.PERSONAL_DATA.ZIPCODE}`);
    await t.expect(await CheckOut_OverviewPage.overviewheader.textContent).contains(`${MESSAGES.HEADERS.OVERVIEW_PAGE}`);
});

test('Final order items',async t =>{
    await CheckOut_yourInformationPage.fillUserInformation(`${VARIABLES.PERSONAL_DATA.FIRSTNAME}`,`${VARIABLES.PERSONAL_DATA.LASTNAME}`,`${VARIABLES.PERSONAL_DATA.ZIPCODE}`);
    let productlistcheckout=await CheckOut_OverviewPage.getAddedProducts(`${VARIABLES.PRODUCTSTOADD}`);
    await t.expect(productlistr).eql(productlistcheckout);//Verifies if 2 elements names selected on add to cart step, are the same as the ones showing on checkout overview.
    
});

test('Complete a purchase ',async t =>{
    await CheckOut_yourInformationPage.fillUserInformation(`${VARIABLES.PERSONAL_DATA.FIRSTNAME}`,`${VARIABLES.PERSONAL_DATA.LASTNAME}`,`${VARIABLES.PERSONAL_DATA.ZIPCODE}`);
    await t.expect (await CheckOut_CompletePage.completePurchase()).eql(`${MESSAGES.PURCHASE_COMPLETED_MSG}`);
});




