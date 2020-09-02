const homePage = require('../pageobjects/HomePage')
const footerPage = require('../pageobjects/FooterPage')

describe('OCM QA page', () => {
    
	it('Open browser', () => {
		homePage.open()
		expect(browser).toHaveUrl(homePage.url)		
		expect(browser).toHaveTitle(homePage.title)
		homePage.closePopUp()
	})

    it('Track Order', () => {
		footerPage.linkTrackOrder()
		footerPage.trackOrderPage()
		
	})

	it('Privacy Policy', () => {
		footerPage.linkPrivPolicy()
		footerPage.privacyPolicyPage()

	})

	it('Terms and Conditions', () => {
		footerPage.linkTerms()
		footerPage.termsPage()

	})

	it('Our Guarantee link', () => {
		footerPage.linkGuarantee()
		footerPage.guaranteePage()

	})
	
	it('About Us link', () => {
		footerPage.linkAboutUs()
		footerPage.aboutUsPage()

	})
	
	it('Snacks for Heroes link', () => {
		footerPage.linkSnacks()
		footerPage.snacksPage()

	})

	it('Testimonials link', () => {
		footerPage.linkTestimonials()
		footerPage.testimonialsPage()

	})

	it('School Partnership link', () => {
		footerPage.linkSchoolPartnership()
		footerPage.schoolPartnershipPage()

	})

	it('School Checklist link', () => {
		footerPage.linkSchoolChecklist()
		footerPage.schoolChecklistPage()

	})

	it( 'Become a Partner link', () => {
		footerPage.linkBecomePartner()
		footerPage.becomePartnerPage()

	})

	it('Become a Student Ambassador', () => {
		footerPage.linkStudentAmbassador()
		footerPage.studentAmbasadorPage()

	})

})

