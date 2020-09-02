const homePage = require('../pageobjects/HomePage')
const loginPage = require('../pageobjects/LoginPage')

describe('OCM QA page', () => {
    
	it('Open browser', () => {
		homePage.open()
		expect(browser).toHaveUrl(homePage.url)		
		expect(browser).toHaveTitle(homePage.title)
		homePage.closePopUp()
	})

    it('Login Success', () => {
		loginPage.loginSuccessfully()
		
	})

	it('Login Fail', () => {
		loginPage.loginFail()
	
	})
	
})

