
function creditCard (){
    let cardNumber = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[1]/div/div[2]/div[1]/div/div/div[3]/form/div[1]/div/input")  //form/div[1]/div/input
    let nameOnCard = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[1]/div/div[2]/div[1]/div/div/div[3]/form/div[2]/div/input")  //div[3]/div[2]/div/div[1]/div/div[2]/div[1]/div/div/div[3]/form/div[2]/div/input
    let dueDate = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[1]/div/div[2]/div[1]/div/div/div[3]/form/div[3]/div[1]/div/input")  //div[3]/div[1]/div/input
    let cvc = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[1]/div/div[2]/div[1]/div/div/div[3]/form/div[3]/div[2]/div/input")  //div[3]/form/div[3]/div[2]/div/input
    let savePayment = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/button/span") //div[3]/div[2]/div/button/span

    cardNumber.setValue("4012888888881881")
    nameOnCard.setValue("Cesar Castillo")
    dueDate.setValue("1220")
    cvc.setValue("111")
    savePayment.click()
}

function splitIt (){
    let splititRadio = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[3]/div/div[1]/span/span[1]/input") //div[3]/div/div[1]/span/span[1]/input
    let cardSplitit = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[3]/div/div[3]/div[1]/div/div/div[3]/form/div[1]/div/input")  //form/div[1]/div/input
    let cardName = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[3]/div/div[3]/div[1]/div/div/div[3]/form/div[2]/div/input")  //form/div[2]/div/input
    let dutDate = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[3]/div/div[3]/div[1]/div/div/div[3]/form/div[3]/div[1]/div/input")  //div[3]/form/div[3]/div[1]/div/input
    let cvc = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[3]/div/div[3]/div[1]/div/div/div[3]/form/div[3]/div[2]/div/input")  //div[3]/div[2]/div/input
    let installments = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[3]/div/div[3]/div[2]/div/div[3]/button") //div[3]/button
    let terms = $("//*[@id='__next']/div/main/div/div[3]/div/div/div/div/div[1]/div[3]/div[2]/div/div[3]/div/div[3]/label/span[1]/span[1]/input") //label/span[1]/span[1]
    


}

module.exports = { creditCard }