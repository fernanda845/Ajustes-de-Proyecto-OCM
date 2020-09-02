const env = require('../test-data/url')

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get ocmLogo () { return $('//header[2]/div[1]/div[1]/a/img') }

    open (path) {
        browser.maximizeWindow()
        return browser.url(env.base_url + '/' + path)
    }

    clickOcmLogo () {
        this.ocmLogo.click()
    }


}
