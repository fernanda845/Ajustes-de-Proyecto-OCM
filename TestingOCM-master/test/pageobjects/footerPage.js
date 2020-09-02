const page = require('./page')
const homeData = require('../test-data/homePage.json')

class FooterPage extends page {
    
    //VARIABLES
    get trackOrder () { return $('//div[1]/a[1]/p') }
    get trackTitle () { return homeData.footer.trackOrderTitle }
    get trackUrl () { return homeData.footer.trackOrderUrl }
    get trackOrderTitle () { return $('//div[1]/p') }
    get pageTrackTitle () { return homeData.footer.trackPgTitle } 
    get privPolicy () { return $('//div[1]/a[5]/p') }
    get privacyTitle () { return homeData.footer.privacyTitleTxt }
    get privPolicyUrl () { return homeData.footer.privPolivyUrl }
    get privacyPolicyTitle () { return $('//div[1]/h1') }
    get pagePriPolicyTitle () { return homeData.footer.priPolicyPgTitle }
    get terms () { return $('//div[1]/a[6]/p') }
    get termsTitle () { return homeData.footer.termsCondTitle }
    get termsUrl () { return homeData.footer.termsCondUrl }
    get termsCondiontsTitle (){ return $('//h1')}
    get pageTermsTitle () { return homeData.footer.termsPgTitle }
    get guarantee () { return $('//div[1]/a[7]/p') }
    get guaranteeTitle () { return homeData.footer.ourGuaranteeTitle}
    get guaranteeUrl () { return homeData.footer.ourGuaranteeUrl}
    get guaranteedTitle() { return $('//div[1]/h1')}
    get pageGuaranteedTitle () { return homeData.footer.guaranteedPgTitle }
    get aboutUs() { return $('//div[2]/a[1]/p') }
    get aboutTitle () { return homeData.footer.aboutUsTitle }
    get aboutUrl () { return homeData.footer.aboutUsUrl }
    get aboutUsTitlePg (){ return $('//div[1]/h1') }
    get pageAboutUsTitle () { return homeData.footer.aboutUsPgTitle }
    get snacks () { return $('//div[2]/a[2]/p') }
    get snacksTitle () { return homeData.footer.snackTitle }
    get snacksUrl () { return homeData.footer.snackUrl }
    get snacksTitlePg () { return $('//div[1]/h1')}
    get pageSnacksTitle () { return homeData.footer.snacksPgTitle }
    get testimonials () { return $('//div[2]/a[4]/p')}
    get testimonialsTitle () { return homeData.footer.testimonialTitle}
    get testinomialsUrl () { return homeData.footer.testimonialUrl}
    get testinomialsTitlePg () { return $('//div[1]/h1')}
    get pageTestimonialsTitle () { return homeData.footer.testimonialsPgTitle}
    get schoolPartnership () { return $('//div[2]/a[5]/p')}
    get schoolTitle () { return homeData.footer.schoolPartnershipTitle}
    get schoolUrl () { return homeData.footer.schoolPartnershipUrl}
    get schoolTitlePg(){ return $('//div[1]/h1')}
    get pageSchoolPartnershipTitle() { return homeData.footer.schoolPartnershipPgTitle}
    get schoolChecklist () { return $('//div[2]/a[6]/p')}
    get schoolChecklistTitle () { return homeData.footer.schoolChecklistTitleTxt}
    get schoolChecklistUrl () { return homeData.footer.schoolChecklistUrlData}
    get schoolChecklistTitlePg () { return $('//div[1]/h1')}
    get pageshoolChecklistTitle () { return homeData.footer.schoolChecklistPgTitle}
    get becomePartner(){ return $('//div[1]/h1')}
    get becomePartnerTitle () { return homeData.footer.becomePartnerTitleTxt}
    get becomePartnerUrl () { return homeData.footer.becomePartnerUrlData}
    get becomeLinkName () { return $ ('//div[2]/a[7]/p')}
    get pagebecomePartner () { return homeData.footer.becomePageTitle }
    get student () { return $('//a[8]/p')}
    get studentTitle () { return homeData.footer.studentAmbassadorTitle}
    get studentAmbasadorUrl () { return homeData.footer.studentAmbassadorUrlData}
    get studentAmbassadorPg () { return $('//h2')}
    get pageStudentAmbasador () { return homeData.footer.studentAmbasadorPgTitle}
    



    //METHODS
    linkTrackOrder () {
        expect(this.trackOrder).toHaveText(this.trackTitle)
        this.trackOrder.click()
    }
    trackOrderPage () {
        expect(browser).toHaveUrl(this.trackUrl)
        expect(this.trackOrderTitle).toHaveText(this.pageTrackTitle)
    }
    linkPrivPolicy () {
        expect(this.privPolicy).toHaveText(this.privacyTitle)
        this.privPolicy.click()
    }
    privacyPolicyPage () {
        expect(browser).toHaveUrl(this.privPolicyUrl)
        expect(this.privacyPolicyTitle).toHaveText(this.pagePriPolicyTitle)
    }
    linkTerms () {
        expect(this.terms).toHaveText(this.termsTitle)
        this.terms.click()
    }
    termsPage () {
        expect(browser).toHaveUrl(this.termsUrl)
        expect(this.termsCondiontsTitle).toHaveText(this.pageTermsTitle)
    } 
    linkGuarantee() {
        expect(this.guarantee).toHaveText(this.guaranteeTitle)
        this.guarantee.click()
    }
    guaranteePage () {
        expect(browser).toHaveUrl(this.guaranteeUrl)
        expect(this.guaranteedTitle).toHaveText(this.pageGuaranteedTitle)
    }
    linkAboutUs () {
        expect(this.aboutUs).toHaveText(this.aboutTitle)
        this.aboutUs.click()
    }
    aboutUsPage() {
        expect(browser).toHaveUrl(this.aboutUrl)
        expect(this.aboutUsTitlePg).toHaveText(this.pageAboutUsTitle)
    }
    linkSnacks () {
        expect(this.snacks).toHaveText(this.snacksTitle)
        this.snacks.click()
    }
    snacksPage () {
        expect(browser).toHaveUrl(this.snacksUrl)
        expect(this.snacksTitlePg).toHaveText(this.pageSnacksTitle)
    }
    linkTestimonials () {
        expect(this.testimonials).toHaveText(this.testimonialsTitle)
        this.testimonials.click()
    }
    testimonialsPage () {
        expect(browser).toHaveUrl(this.testinomialsUrl)
        expect(this.testinomialsTitlePg).toHaveText(this.pageTestimonialsTitle)
    }
    linkSchoolPartnership () {
        expect(this.schoolPartnership).toHaveText(this.schoolTitle)
        this.schoolPartnership.click()
    }
    schoolPartnershipPage (){
        expect(browser).toHaveUrl(this.schoolUrl)
        expect(this.schoolTitlePg).toHaveText(this.pageSchoolPartnershipTitle)
    }
    linkSchoolChecklist () {
        expect(this.schoolChecklist).toHaveText(this.schoolChecklistTitle)
        this.schoolChecklist.click()
    }
    schoolChecklistPage () {
        expect(browser).toHaveUrl(this.schoolChecklistUrl)
        expect(this.schoolChecklistTitlePg).toHaveText(this.pageshoolChecklistTitle)
    }
    linkBecomePartner () {
        expect(this.becomeLinkName).toHaveText(this.becomePartnerTitle)
        this.becomeLinkName.click()
    }
    becomePartnerPage () {
        expect(browser).toHaveUrl(this.becomePartnerUrl)
        expect(this.becomePartner).toHaveText(this.pagebecomePartner)
    }
    linkStudentAmbassador () {
        expect(this.student).toHaveText(this.studentTitle)
        this.student.click()
    }
    studentAmbasadorPage () {
        expect(browser).toHaveUrl(this.studentAmbasadorUrl)
        expect(this.studentAmbassadorPg).toHaveText(this.pageStudentAmbasador)
    }

}

module.exports = new FooterPage()