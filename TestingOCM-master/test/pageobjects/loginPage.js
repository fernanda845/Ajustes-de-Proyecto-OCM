const Page = require('./page');
const homeData = require('../test-data/homePage.json')
const assert = require('assert')

class LoginPage extends Page {

    get userIcon () { return $('//div[2]/div[2]/button')  }
    get username () { return $('//div[1]/div/input') }
    get password () { return $('//div[2]/div[2]/div/input') }
    get signInBtn () { return $('//*[@id="login-modal-card"]/div[3]/button/span') }
    get profile () { return $('//li[1]') }
    get logout () { return $('//li[2]') }
    get userData () { return homeData.login.user}
    get pwdData () { return homeData.login.pwd}
    get profileData () { return homeData.login.profileText}
    get logoutData () { return homeData.login.logoutText}
    get userError () { return $('//*[@id="login-modal-card"]/div[2]/div[1]/p').getText() }
    get pwdError () {return $ ('//div[2]/div[2]/p').getText() }
    get userErrorMsg () { return homeData.login.userErrorMsgTxt}
    get pwdErrorMsg () { return homeData.login.pwdErrorMsgTxt}
 

    loginSuccessfully () {
        this.userIcon.click()
        this.username.setValue(this.userData)
        this.password.setValue(this.pwdData)
        this.signInBtn.click()
        this.userIcon.click()
        expect(this.profile).toHaveText(this.profileData)
        expect(this.logout).toHaveText(this.logoutData)
        this.logout.click()
        
    }

    loginFail () {
        this.userIcon.click()
        this.signInBtn.click()
        browser.pause(1000)
        this.signInBtn.click()  
        assert.strictEqual(this.userError, this.userErrorMsg)
        assert.strictEqual(this.pwdError, this.pwdErrorMsg)
    }

}

module.exports = new LoginPage()
