const page = require('./page')
const cartData = require('../test-data/cart.json')

class CartPage extends page {

    get cartIconRef () {return $('//header[2]/div[1]/div[2]/a')}
    get cartTitleRef () {return $('//h1')}
    get cartBreadcrumbRef () {return $('//li[3]/p')}
    get emptyCartRef () {return $('//div[3]/div[1]/div/h3')}
    get continueShoppingBtn () {return $ ('//div[2]/div[3]/div[1]/div/button')}

    cartIcon () {         
        expect(this.cartIconRef).toHaveAttr(cartData.cartIcon.href, cartData.url)
        this.cartIconRef.click()
        expect(browser).toHaveUrl(cartData.url)
        this.clickOcmLogo()
    }

    emptyCart () {
        this.cartIconRef.click()
        expect(browser).toHaveUrl(cartData.url)
        expect(this.cartTitleRef).toHaveText(cartData.emptyCart.title)
        expect(this.cartBreadcrumbRef).toHaveText(cartData.emptyCart.breadcrumbTitle)
        expect(this.emptyCartRef).toHaveText(cartData.emptyCart.emptyTitle)
        expect(this.continueShoppingBtn).toHaveText(cartData.emptyCart.continueBtnTitle)
        this.continueShoppingBtn.click()
        expect(browser).toHaveUrl(cartData.emptyCart.homeUrl)
    }
}

module.exports = new CartPage()