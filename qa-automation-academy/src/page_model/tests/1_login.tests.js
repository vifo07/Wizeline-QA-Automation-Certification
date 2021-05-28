import LoginPage from '../pages/login.page';
import DashboardPage from '../pages/dashboard.page';
import ProductPage from '../pages/product.page';
import {URLS} from '../data/Data'
import {CREDENTIALS} from '../data/Data'
import {MESSAGES} from '../data/Data'




fixture('Login Tests').page(`${URLS.BASE_PAGE}`);

test('Login with a valid user',async t =>{

    await LoginPage.login(`${CREDENTIALS.VALID_USER.USERNAME}`,`${CREDENTIALS.VALID_USER.PWD}`);
    await t.expect(ProductPage.productheader.textContent).contains(`${MESSAGES.HEADERS.PRODUCT_PAGE}`);

});

test('Login with an invialid user',async t =>{
    //NEGATIVE SCENARIO
    await LoginPage.login(`${CREDENTIALS.INVALID_USER.USERNAME}`,`${CREDENTIALS.INVALID_USER.PWD}`);
    await t.expect(LoginPage.loginerror.textContent).contains(`${MESSAGES.INVALID_LOGIN_MSG}`);
});








/*test('Wrong Email/Password handle succesful',async t=>{

    await LoginPage.login(EMAIL,INCORRECT_PASSWORD);

    let errormessage = await LoginPage.getLoginErrorMessage();

    await t.expect(errormessage).eql('Email o contraseña incorrectos');


});*/


