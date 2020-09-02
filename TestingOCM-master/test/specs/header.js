const homePage = require('../pageobjects/HomePage')

describe('OCM Header', () => {

	it('Open browser', () => {
		homePage.open()
		expect(browser).toHaveUrl(homePage.url)		
		expect(browser).toHaveTitle(homePage.title)
		homePage.closePopUp()
	})

    it('Promo Banner', () => {
		homePage.promoBanner()
	})

	it('Find your school', () => {
		homePage.findSchoolLink()
		homePage.clickOnLogo()
	})

	it('Become a Student Ambassador', () => {
		homePage.becomeAmbassador()
		homePage.clickOnLogo()
	})

	it('Blog Link', () => {
		homePage.blog()
	})
})

