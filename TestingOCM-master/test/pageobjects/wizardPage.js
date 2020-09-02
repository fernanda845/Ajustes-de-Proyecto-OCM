const Page = require('./page');
const wizardJson = require('../test-data/wizard.json')
const assert = require('assert')

class WizardPage extends Page {

    get title () { return $('//div[4]/div/div/div/div[1]/div/div/h3') }
    get pickColor () { return $('//div/div/div[1]/div/div/div/div[1]/div/h3') }
    get chooseSheet () { return $('//div[2]/div/h3') }
    get upgradeComfort () { return $('//div[3]/div/h3') }
    get titleTxt () { return wizardJson.title }
    get pickColorTxt () { return wizardJson.pickColorTxt }
    get chooseSheetTxt () { return wizardJson.chooseSheetTxt }
    get upgradeComfortTxt () { return wizardJson.upgradeComfortTxt }
    get getStart () { return $('//div[4]/div/div/div/div[1]/div/div/button')}

    get pickPack () { return $('//div[1]/span/span[2]/span/div') }
    get findStyle () { return $('//div[3]/span/span[2]/span/div') }
    get upgrade () { return $('//div[5]/span/span[2]/span/div') }
    get packSchool () { return $('//div[7]/span/span[2]/span/div') }
    get completeRoom () { return $('//div[9]/span/span[2]/span/div') }
    get pickPackTxt () { return wizardJson.pickPackTxt }
    get findStyleTxt () { return wizardJson.findStyleTxt }
    get upgradeTxt () { return wizardJson.upgradeTxt }
    get packSchoolTxt () { return wizardJson.packSchoolTxt }
    get completeRoomTxt () { return wizardJson.completeRoomTxt }


    buildYourPak () {
        assert.strictEqual(this.title, this.titleTxt)
        assert.strictEqual(this.pickColor, this.pickColorTxt)
        assert.strictEqual(this.chooseSheet, this.chooseSheetTxt)
        assert.strictEqual(this.upgradeComfort, this.upgradeComfortTxt)
        this.getStart.click()
        assert.strictEqual(this.pickPack, this.pickPackTxt)
        assert.strictEqual(this.findStyle, this.findStyleTxt)
        assert.strictEqual(this.upgrade, this.upgradeTxt)
        assert.strictEqual(this.packSchool, this.packSchoolTxt)
        assert.strictEqual(this.completeRoom, this.completeRoomTxt)


        


    }

}

module.exports = new WizardPage()