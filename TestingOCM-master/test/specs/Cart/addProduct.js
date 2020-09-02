const val = require('../../../utilities/closeWelcomePopUp.js')
const products = require('../../../utilities/addProducts.js')

describe('OCM QA page', () => {
    
    it('Load Browser and close PopUp', () => {
		browser.url('/')
		browser.maximizeWindow()
		val.popUp()
    })

    it('Validate Cart Page -> Remove button', () => {
        products.addPak()
        browser.pause(1000)
        let prod = $("//*[@id='__next']/div/main/div[2]/div[3]/div[1]/div/div/div[1]/div[1]/div/h2")
        expect(prod).toHaveText('Your Products')
        let description = $("//*[@id='__next']/div/main/div[2]/div[3]/div[1]/div/div/div[1]/div[2]/div/div/div/div[2]/div[1]/div[1]/a/h4")
        expect(description).toHaveText("Ultimate Room Collection - Twin XL Bedding and Bath Set")
        let orderSummary = $("//*[@id='__next']/div/main/div[2]/div[3]/div[1]/div/div/div[2]/div/div[1]/h3")
        expect(orderSummary).toHaveText("Order Summary")
    })
    
})