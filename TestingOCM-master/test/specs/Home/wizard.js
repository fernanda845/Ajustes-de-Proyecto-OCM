const homePage = require('../../pageobjects/HomePage')
const wizardPage = require('../../pageobjects/WizardPage')

describe('OCM Wizard Functionality', () => {
    it('Open browser', () => {
		homePage.open()
		expect(browser).toHaveUrl(homePage.url)		
		expect(browser).toHaveTitle(homePage.title)
		homePage.closePopUp()
    })
    
    it('Wizard Functionality', () => {
        wizardPage.buildYourPak()
    })

})

