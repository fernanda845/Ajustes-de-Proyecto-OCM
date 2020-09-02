const homePage = require('../pageobjects/HomePage')

describe('OCM QA page', () => {
    
	it('Open browser', () => {
		homePage.open()
		expect(browser).toHaveUrl(homePage.url)		
		expect(browser).toHaveTitle(homePage.title)
		homePage.closePopUp()
	})

    it('Verify Hero Image', () => {
		homePage.heroImage()
	})
	
})

