
function popUp (){

    try {
        const noThanks = $("/html/body/div[8]/div/div/div/div/div/div[2]/div[2]/div/div/div/div/div[2]/div[2]/div")  //*[@id="ltkpopup-text-btn"]/a
        noThanks.waitForClickable({ timeout: 12000 })
        noThanks.click()
    }
    catch(error){
        console.log(error)
    }
    
}

function clickOnLogo (){
    const clickOnLogo = $("//*[@id='__next']/div/div[1]/header[2]/div[1]/div[1]/a/img")
    clickOnLogo.click()
}

module.exports = { popUp, clickOnLogo }
