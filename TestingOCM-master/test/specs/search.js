const val = require('../../utilities/closeWelcomePopUp.js')

describe('OCM QA page', () => {
    
    it('Load Browser and close PopUp', () => {
		browser.url('/')
		browser.maximizeWindow()
        val.popUp()
    })

    it('Search By Product Paks', () => {
		let value = $("//*[@id='top-search-input']")
		value.setValue("Paks") //nota: este es el valor de la búsqueda
		let searchResult = $("/html/body/div[7]/div/div/div[2]/div/li/div/span")
		searchResult.waitForExist({ timeout: 10000 })
		expect(searchResult).toHaveText('Top products for "Paks"')
		let searchIcon = $("//*[@id='__next']/div/div[1]/header[2]/div[1]/div[2]/div[1]/form/div/div/button/span[1]")
		searchIcon.click()
		let searchTitle = $("//*[@id='__next']/div/main/div[3]/div/h1")
		expect(searchTitle).toHaveText("Results for Paks")
		let logo = $("//*[@id='__next']/div/div[1]/header[2]/div[1]/div[1]/a")
		logo.click()
	})
	
	it('Search By SKU', () => {
		browser.refresh()
		browser.pause(3000)
		let value = $("//*[@id='top-search-input']")
		value.setValue("FLEECE_KWI") //nota: este es el valor de la búsqueda
		let searchResult = $("body > div.jss313 > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-8 > div > li > div > span")
		searchResult.waitForExist({ timeout: 10000 })
		expect(searchResult).toHaveText('Top products for "FLEECE_KWI"')
		let searchIcon = $("//*[@id='__next']/div/div[1]/header[2]/div[1]/div[2]/div[1]/form/div/div/button/span[1]")
		searchIcon.click()
		let searchTitle = $("//*[@id='__next']/div/main/div[3]/div/h1")
		expect(searchTitle).toHaveText("Results for FLEECE_KWI")
		let logo = $("//*[@id='__next']/div/div[1]/header[2]/div[1]/div[1]/a")
		logo.click()
    })

	it('Search By Zero Results', () => {
		browser.refresh()
		browser.pause(3000)
		let value = $("//*[@id='top-search-input']")
		value.setValue("Curcuma") //nota: este es el valor de la búsqueda
		let searchIcon = $("//*[@id='__next']/div/div[1]/header[2]/div[1]/div[2]/div[1]/form/div/div/button/span[1]")
		searchIcon.click()
		let searchTitle = $("//*[@id='__next']/div/main/div[3]/div/h1")
		expect(searchTitle).toHaveText("Results for Curcuma")
		let logo = $("//*[@id='__next']/div/div[1]/header[2]/div[1]/div[1]/a")
		logo.click()
    })
})

