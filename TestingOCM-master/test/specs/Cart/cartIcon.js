const cartPage = require('../../pageobjects/CartPage')
const homePage = require('../../pageobjects/HomePage')

describe('OCM QA page', () => {
    
    it('Load Browser and close PopUp', () => {
      homePage.open()
      expect(browser).toHaveUrl(homePage.url)		
      expect(browser).toHaveTitle(homePage.title)
      homePage.closePopUp()
    })

    it('Verify Cart icon redirects', () => {
      cartPage.cartIcon()
    })
    
})