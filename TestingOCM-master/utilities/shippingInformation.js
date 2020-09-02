
function shipGround (){
    let shipMethod = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[2]/div[2]/div[1]/div[1]/div/div[2]/div/div[2]/div/div/div") //div[2]/div[2]/div[1]/div[1]/div/div[2]/div/div[2]/div/div/div
    let ground = $("//*[@id='menu-']/div[3]/ul/li[2]/div") //li[2]/div
    let saveContinue = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[2]/div[2]/div[2]/button") //div[2]/div[2]/div[2]/button

    shipMethod.click()
    ground.click()
    saveContinue.click()
}

module.exports = { shipGround }

