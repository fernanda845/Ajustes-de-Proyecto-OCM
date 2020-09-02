const page = require('./page')
const homeData = require('../test-data/homePage.json')

class HomePage extends page{
    
    //VARIABLES
    get popUpBtn () { return $('#ltkpopup-text-btn > a') }    
    get url () { return homeData.url }
    get title () { return homeData.title }
    get promoBannerLink () { return $('//a/div/a') }
    get findSchool () { return $('//nav/a[1]') }
    get shoolTitle () { return $('//div[1]/h1') }
    get partnerTitle () { return $('//div[1]/h1') }
    get ocmLogo () { return $('//header[2]/div[1]/div[1]/a') }
    get ambassadorLink () { return $('//nav/a[3]') }
    get ambassadorTitle () { return $('//h2') }
    get blogLink () { return $('//nav/a[2]') }
    get heroText () { return $('//a/div/div[2]/div/div/div[2]/div') }
    get heroTxt () { return homeData.heroTitle }
    get heroBtn () { return  $("//div[4]/button") }
    get valuePaksTitle () { return  $('//h1') }
    get valueTitle () { return homeData.expectedValueTitle }

    get test () { return homeData.test.uno }

    //METHODS
    open () { return super.open('') }
    closePopUp () { 
        try{
          this.popUpBtn.waitForClickable({ timeout: 12000 })
          this.popUpBtn.click()
        }catch(e){ console.log('Unable to click on the Element') }
        
    }
    promoBanner () { expect(this.promoBannerLink).toHaveText(homeData.promoTxt) }
    findSchoolLink () { 
        expect(this.findSchool).toHaveText(homeData.findSchoolTxt) 
        this.findSchool.click()
        this.partnerTitle.waitForExist({ timeout: 10000 })
        expect(browser).toHaveUrl(homeData.schoolUrl)
        this.partnerTitle.toHaveText(homeData.schoolTitle)
    }
    clickOnLogo (){ this.ocmLogo.click() }
    becomeAmbassador () {
        expect(this.ambassadorLink).toHaveText(homeData.ambassadorTxt)
        this.ambassadorLink.click()
        this.ambassadorTitle.waitForExist({ timeout: 5000 })
        expect(this.ambassadorTitle).toHaveText(homeData.ambassadorTitle)
    }
    blog () {
        expect(this.blogLink).toHaveText(homeData.blogTxt)
        blogLink.click()
        browser.pause(5000)
        browser.switchToWindow(homeData.blogUrl)
        expect(browser).toHaveUrl(homeData.blogUrl)
        browser.switchToWindow(window1)
    }
    heroImage() {
        expect(this.heroText).toHaveText(this.heroTxt)
        this.heroBtn.click()
        expect(this.valuePaksTitle).toHaveText(this.valueTitle)
    }
}

module.exports = new HomePage()