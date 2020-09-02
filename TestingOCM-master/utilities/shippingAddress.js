
function residentialAddress (){
    let first = $("//*[@id='shipping-section']/div[2]/form/div[1]/div[2]/div[1]/div/div/input") //div[2]/div[1]/div/div/input
        let last  = $("//*[@id='shipping-section']/div[2]/form/div[1]/div[2]/div[2]/div/div/input") //div[2]/div[2]/div/div/input
        let address = $("//*[@id='shipping-section']/div[2]/form/div[1]/div[2]/div[4]/div/div/input") //div[2]/div[4]/div/div/input
        let zipCode = $("//*[@id='shipping-section']/div[2]/form/div[1]/div[2]/div[8]/div/div/input")  //div[8]/div/div/input
        let email = $("//*[@id='shipping-section']/div[2]/form/div[1]/div[2]/div[9]/div/div/input")  //div[9]/div/div/input
        let phone = $("//*[@id='shipping-section']/div[2]/form/div[1]/div[2]/div[10]/div/input") //div[10]/div/input
        let save = $("//*[@id='shipping-section']/div[2]/form/div[2]/button") //div[2]/button

        first.setValue("Cesar")
        last.setValue("Castillo")
        address.setValue("199 Enterprise Dr")
        zipCode.setValue("06106")
        email.setValue("clecona@ocm.com")
        phone.setValue("1234567890")
        save.click()

}

module.exports = { residentialAddress }