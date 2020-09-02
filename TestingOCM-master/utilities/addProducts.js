
//let beddingMenu = $("//*[@id='__next']/div/div[1]/header[2]/div[2]/div/div[1]/div/div/a")
//let valuePaks = $("//*[@id='__next']/div/main/div[5]/div/div[2]/div[1]/a[1]")
//let color = $("//*[@id='__next']/div/main/div[2]/div/div[2]/div/div/div[2]/div/div[3]/div/div[1]/div/div/div[2]/div/div[4]/div/div[1]/div/div[1]/img")
//let trunk = $("//*[@id='__next']/div/main/div[2]/div/div[2]/div/div/div[2]/div/div[3]/div/div[2]/div/div/div[2]/div/div[4]/div/div[1]/div/div[1]/img")
//let comfort = $("//*[@id='__next']/div/main/div[2]/div/div[2]/div/div/div[2]/div/div[4]/div/div/div/div[3]/div[1]/button")
//let addToCart = $("//*[@id='__next']/div/main/div[2]/div/div[2]/div/div/div[2]/div/div[5]/div/div[2]/button")
//let addCartAndCheckout = $("/html/body/div[11]/div[3]/div/div[2]/div/div[3]/div[2]/button")

function addPak (){
    let beddingMenu = $("//*[@id='__next']/div/div[1]/header[2]/div[2]/div/div[1]/div/div/a") //div[2]/div/div[1]/div/div/a
    beddingMenu.click()
    browser.pause(2000)
    let valuePaks = $("//*[@id='__next']/div/main/div[5]/div/div[2]/div[1]/a[1]") //div[5]/div/div[2]/div[1]/a[1]
    valuePaks.click()
    browser.pause(2000)
    let ultimateVP = $("//*[@id='__next']/div/main/div[5]/div/div[2]/div[2]/div/div/div/div[1]/div/div/a[1]") //div[2]/div/div/div/div[1]/div/div/a[1]
    ultimateVP.click()
    browser.pause(2000)
    let color = $("//*[@id='__next']/div/main/div[2]/div/div[2]/div/div/div[2]/div/div[3]/div/div[1]/div/div/div[2]/div/div[4]/div/div[1]/div/div[1]/img")  //div[1]/div/div/div[2]/div/div[4]/div/div[1]/div/div[1]/img
    color.click()
    let trunk = $("//*[@id='__next']/div/main/div[2]/div/div[2]/div/div/div[2]/div/div[3]/div/div[2]/div/div/div[2]/div/div[4]/div/div[1]/div/div[1]/img")   //div[2]/div/div/div[2]/div/div[4]/div/div[1]/div/div[1]/img
    trunk.click()
    let comfort = $("//*[@id='__next']/div/main/div[2]/div/div[2]/div/div/div[2]/div/div[4]/div/div/div/div[3]/div[1]/button") //div[3]/div[1]/button
    comfort.click()
    let addToCart = $("//*[@id='__next']/div/main/div[2]/div/div[2]/div/div/div[2]/div/div[5]/div/div[2]/button") //div[5]/div/div[2]/button
    addToCart.click()
    browser.pause(5000)
    let addCartAndCheckout = $('/html/body/div[9]/div[3]/div/div[2]/div/div[3]/div[2]/button') //div[2]/div/div[3]/div[2]/button
    addCartAndCheckout.click() 
    
}


module.exports = { addPak }