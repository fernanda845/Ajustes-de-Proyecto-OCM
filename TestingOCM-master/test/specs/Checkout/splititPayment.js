const val = require('../../../utilities/closeWelcomePopUp.js')
const products = require('../../../utilities/addProducts.js')
const address = require('../../../utilities/shippingAddress.js')
const shipping = require('../../../utilities/shippingInformation.js')
const payment = require('../../../utilities/payment.js')

describe('OCM QA page', () => {
    
    it('Load Browser and close PopUp', () => {
		browser.url('/')
		browser.maximizeWindow()
		val.popUp()
    })

    it('Place an Order using Credit Card -> Remove button', () => {
        products.addPak()
        browser.pause(1000)
        let goCheckout = $("//*[@id='__next']/div/main/div[2]/div[3]/div[1]/div/div/div[2]/div/div[3]/a") //CARRITO
        goCheckout.click()
        address.residentialAddress()
        shipping.shipGround()
        payment.creditCard()
        browser.pause(5000)
        placeOrder = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[2]/div/div/div[7]/button") //CHECKOUT
        placeOrder.click()
        let orderPlaced = $("//*[@id='__next']/div/main/div/div[3]/div/div/div[1]/div/p[1]") //CHECKOUT
        expect(orderPlaced).toHaveText("Order Number:")
    })
    
})