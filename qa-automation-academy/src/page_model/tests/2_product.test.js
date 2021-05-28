import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';
import {URLS} from '../data/Data'
import {CREDENTIALS} from '../data/Data'
import {MESSAGES} from '../data/Data'
import {VARIABLES} from '../data/Data'



fixture('Product Tests').page((`${URLS.BASE_PAGE}`))
.beforeEach(async t =>{
    await LoginPage.login(`${CREDENTIALS.VALID_USER.USERNAME}`,`${CREDENTIALS.VALID_USER.PWD}`);
});

test('Logout from product’s page',async t =>{
    await ProductPage.logOut();
    await t.expect(await ProductPage.loginButton.exists).ok()
});

test('Navigate to the shopping cart',async t =>{
    await ProductPage.goToShoppingCartPage();
    await t.expect(await ProductPage.shoppingcartpageheader.textContent).contains(`${MESSAGES.HEADERS.YOURCART_PAGE}`);
});


test('Add a single item to the shopping cart',async t =>{
    //Using 1 as CONSTANT from Data file
    await ProductPage.addtoCart(`${VARIABLES.SINGLEPRODUCT}`);
    await t.expect(await ProductPage.shoppingcartcount.textContent).eql(`${VARIABLES.SINGLEPRODUCT}`);
});

test('Add multiple items to the shopping cart',async t =>{
    //We can change from Data file for any other number of elements to add, in this case is set to 2.
    await ProductPage.addtoCart(`${VARIABLES.PRODUCTSTOADD}`);
    await t.expect((await ProductPage.shoppingcartcount.textContent)).eql(`${VARIABLES.PRODUCTSTOADD}`)
});



