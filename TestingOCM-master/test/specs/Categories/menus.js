const homePage = require('../../pageobjects/HomePage')
const menuPage = require('../../pageobjects/MenuPage')

describe('OCM QA page', () => {
    
    it('Load Browser and close PopUp', () => {
      homePage.open()
      expect(browser).toHaveUrl(homePage.url)		
      expect(browser).toHaveTitle(homePage.title)
      homePage.closePopUp()
    //return (document.querySelector($('')).naturalWidth != 0)
    })


    it('Validate BEDDING Cat Page, Hero Img, Title and Sub Cats', () => {
      menuPage.beddingMenuOption()
      
      //1. MENU Y CLICK 
      const bedding = $('//div[1]/div/div/a') //beddingRef
        expect($('//div[1]/div/div/a/h6')).toHaveText('Bedding')
        bedding.click()
        expect(browser).toHaveUrl('https://qa.ocm.com/dorm-life/bedding')
      menuPage.heroImg()
       //2. HERO IMAGE, TITLE Y SUBTITLE 
        //const heroImg = $('//div[1]/button/img')
        //expect(heroImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931085/OCM%202.0/3%20-%20Category%20Heros/1%20-%20Bedding/Bedding.jpg')

        //const title = $('//h1')
        expect(title).toHaveText('Bedding')
        
        const subTitle = $('//div[5]/div/div[1]/div[1]/p')
        expect(subTitle).toHaveText('Categories')
       //***** */

      menuPage.valuePaks()
        //Value Paks
        const valPakImg = $('//div[2]/div[1]/a[1]/img')
        const valPakName = $('//div[1]/a[2]/div/div/span')
        expect(valPakImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586271447/OCM%202.0/4%20-%20Category%20Subslots/1%20-%20Bedding/Value_Pak-04.07-1.jpg')
        expect(valPakName).toHaveText('Value Paks')

      menuPage.sheets()  
        //Sheets
        const sheetImg = $('//div[5]/div/div[2]/div[2]/a[1]/img')
        const sheetName = $('//div[2]/a[2]/div/div/span')
        expect(sheetImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586212241/OCM%202.0/4%20-%20Category%20Subslots/1%20-%20Bedding/Sheets-4.6.jpg')
        expect(sheetName).toHaveText('Sheets')

      menuPage.comforters()
        //Comforters
        const comfortImg = $('//div[3]/a[1]/img')
        const comfortName = $('//div[3]/a[2]/div/div/span')
        expect(comfortImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586271447/OCM%202.0/4%20-%20Category%20Subslots/1%20-%20Bedding/Comforters-04.07-1.jpg')
        expect(comfortName).toHaveText('Comforters')

      menuPage.matressPads()
        //Matress Pads
        const padImg = $('//div[4]/a[1]/img')
        const padName = $('//div[4]/a[2]/div/div/span')
        expect(padImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586212241/OCM%202.0/4%20-%20Category%20Subslots/1%20-%20Bedding/Mattress_Pads-4.6.jpg')
        expect(padName).toHaveText('Mattress Pads')
        
      menuPage.pillows()
        //Pillows
        const pillowImg = $('//div[5]/a[1]/img')
        const pillowName = $('//div[5]/a[2]/div/div/span')
        expect(pillowImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586212241/OCM%202.0/4%20-%20Category%20Subslots/1%20-%20Bedding/Pillows-4.6.jpg')
        expect(pillowName).toHaveText('Pillows')

      menuPage.blankets()        
        //Blankets and Throws
        const blanketImg = $('//div[6]/a[1]/img')
        const blanketName = $('//div[6]/a[2]/div/div/span')
        expect(blanketImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586212241/OCM%202.0/4%20-%20Category%20Subslots/1%20-%20Bedding/Blankets_Throws-4.6.jpg')
        expect(blanketName).toHaveText('Blankets and Throws')
      

      menuPage.headboards()        
        //Headboards
        const headImg = $('//div[7]/a[1]/img')
        const headName = $('//div[7]/a[2]/div/div/span')
        expect(headImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586212785/OCM%202.0/4%20-%20Category%20Subslots/1%20-%20Bedding/Headboards-4.6.jpg')
        expect(headName).toHaveText('Headboards')

      homePage.clickOnLogo()
      

    })












    
    it('Validate BATH Cat Page, Hero Img, Title and Sub Cats', () => {
      menuPage.bathMenuOption()
      //1. MENU Y CLICK BATH
      const bath = $('//div[2]/div/div/a')
      expect($('//div[2]/div/div/a/h6')).toHaveText('Bath')
      bath.click()
      expect(browser).toHaveUrl('https://qa.ocm.com/dorm-life/bath')

      menuPage.heroImgBath()
     //2. HERO IMAGE, TITLE Y SUBTITLE  
      const heroImg = $('//div[1]/button/img')
      expect(heroImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586793788/OCM%202.0/3%20-%20Category%20Heros/2%20-%20Bath/Bath_4-4.13.jpg')

      const title = $('//h1')
      expect(title).toHaveText('Bath')

      const subTitle = $('//div[5]/div/div[1]/div[1]/p')
      expect(subTitle).toHaveText('Categories')
      menuPage.towels()
      //Towels
      const towelPakImg = $('//div[2]/div[1]/a[1]/img')
      const towelPakName = $('//div[1]/a[2]/div/div/span')
      expect(towelPakImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931257/OCM%202.0/4%20-%20Category%20Subslots/2%20-%20Bath/Towels.jpg')
      expect(towelPakName).toHaveText('Towels')

      menuPage.showerPaks()
      //Shower Paks
      const showerImg = $('//div[5]/div/div[2]/div[2]/a[1]/img')
      const showerName = $('//div[2]/a[2]/div/div/span')
      expect(showerImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931256/OCM%202.0/4%20-%20Category%20Subslots/2%20-%20Bath/Shower_Paks.jpg')
      expect(showerName).toHaveText('Shower Paks')
    
      menuPage.bathMats()  
      //Bath Mats
      const comfortImg = $('//div[3]/a[1]/img')
      const comfortName = $('//div[3]/a[2]/div/div/span')
      expect(comfortImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931257/OCM%202.0/4%20-%20Category%20Subslots/2%20-%20Bath/Bath_Mats.jpg')
      expect(comfortName).toHaveText('Bath Mats')

      menuPage.laundry()
      //Laundry
      const padImg = $('//div[4]/a[1]/img')
      const padName = $('//div[4]/a[2]/div/div/span')
      expect(padImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931256/OCM%202.0/4%20-%20Category%20Subslots/2%20-%20Bath/Laundry.jpg')
      expect(padName).toHaveText('Laundry')
      
    })
    
    it('Validate DECOR Cat Page, Hero Img, Title and Sub Cats', () => {
      menuPage.decorMenuOption()
      //1. MENU Y CLICK DECOR
      const bedding = $('//div[3]/div/div/a')
      expect($('//div[3]/div/div/a/h6')).toHaveText('Decor')
      browser.url('/dorm-life/decor')
      //bedding.click()
      expect(browser).toHaveUrl('https://qa.ocm.com/dorm-life/decor')
      
      menuPage.heroImgDecor()
      const heroImg = $('//div[1]/button/img')
      expect(heroImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931124/OCM%202.0/3%20-%20Category%20Heros/3%20-%20Decor/Decor.jpg')

      const title = $('//h1')
      expect(title).toHaveText('Decor')
      
      const subTitle = $('//div[5]/div/div[1]/div[1]/p')
      expect(subTitle).toHaveText('Categories')

      menuPage.rugs()     
      //Rugs
      const rugImg = $('//div[2]/div[1]/a[1]/img')
      const rugName = $('//div[1]/a[2]/div/div/span')
      expect(rugImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585694220/spa/category/Rugs_OCM2020.jpg')
      expect(rugName).toHaveText('Rugs')
      
      menuPage.storage()
      //Storage Trunks
      const storeImg = $('//div[5]/div/div[2]/div[2]/a[1]/img')
      const storeName = $('//div[2]/a[2]/div/div/span')
      expect(storeImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586212825/OCM%202.0/4%20-%20Category%20Subslots/3%20-%20Decor/Storage_Trunks-4.6.jpg')
      expect(storeName).toHaveText('Storage Trunks')

      menuPage.organization()
      //Organization
      const organizeImg = $('//div[3]/a[1]/img')
      const organizeName = $('//div[3]/a[2]/div/div/span')
      expect(organizeImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585694543/spa/category/Organization.jpg')
      expect(organizeName).toHaveText('Organization')

      menuPage.housewares()
      //Housewares
      const houseImg = $('//div[4]/a[1]/img')
      const houseName = $('//div[4]/a[2]/div/div/span')
      expect(houseImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585694629/spa/category/Housewares_OCM2020.jpg')
      expect(houseName).toHaveText('Housewares')
      
      menuPage.lighting()
      //Lighting
      const lightImg = $('//div[5]/a[1]/img')
      const lightName = $('//div[5]/a[2]/div/div/span')
      expect(lightImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931274/OCM%202.0/4%20-%20Category%20Subslots/3%20-%20Decor/Lighting.jpg')
      expect(lightName).toHaveText('Lighting')

      menuPage.frames()
      //Frames
      const frameImg = $('//div[6]/a[1]/img')
      const frameName = $('//div[6]/a[2]/div/div/span')
      expect(frameImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585695334/spa/category/Frames.jpg')
      expect(frameName).toHaveText('Frames')
      
      menuPage.mirrors()      
      //Mirrors
      const mirrorImg = $('//div[7]/a[1]/img')
      const mirrorName = $('//div[7]/a[2]/div/div/span')
      expect(mirrorImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585695368/spa/category/Mirrors.jpg')
      expect(mirrorName).toHaveText('Mirrors')

      //Wall Art
      const wallImg = $('//div[8]/a[1]/img')
      const wallName = $('//div[8]/a[2]/div/div/span')
      expect(wallImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931273/OCM%202.0/4%20-%20Category%20Subslots/3%20-%20Decor/Wall_Art.jpg')
      expect(wallName).toHaveText('Wall Art')
  })

  it('Validate APARTMENTS Cat Page, Hero Img, Title and Sub Cats', () => {
      menuPage.apartmentsMenuOption()
    //1. MENU Y CLICK APARTMENTS
    
    const apartment = $('//div[4]/div/div/a')
    expect($('//div[4]/div/div/a/h6')).toHaveText('Apartments')
    apartment.click()
    expect(browser).toHaveUrl('https://qa.ocm.com/dorm-life/apartments')

      menuPage.heroImgapartments()
    const heroImg = $('//div[1]/button/img')
    expect(heroImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1592838307/OCM%202.0/Apartment%20Page/Apartment-Hero.jpg')

    const title = $('//h1')
    expect(title).toHaveText('Apartments')

    const subTitle = $('//div[5]/div/div[1]/div[1]/p')
    expect(subTitle).toHaveText('Categories')

      menuPage.bedroom()
    //Bedroom
    const bedPakImg = $('//div[2]/div[1]/a[1]/img')
    const bedPakName = $('//div[1]/a[2]/div/div/span')
    expect(bedPakImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1592838320/OCM%202.0/Apartment%20Page/Bedroom.jpg')
    expect(bedPakName).toHaveText('Bedroom')

      menuPage.bathroom()
    //Bathroom
    const bathImg = $('//div[5]/div/div[2]/div[2]/a[1]/img')
    const bathName = $('//div[2]/a[2]/div/div/span')
    expect(bathImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1592838320/OCM%202.0/Apartment%20Page/Bathroom.jpg')
    expect(bathName).toHaveText('Bathroom')

      menuPage.decor()
    //Decor
    const decorImg = $('//div[3]/a[1]/img')
    const decorName = $('//div[3]/a[2]/div/div/span')
    expect(decorImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1592838320/OCM%202.0/Apartment%20Page/Decor.jpg')
    expect(decorName).toHaveText('Decor')

      menuPage.rugs()
    //Rugs
    const rugImg = $('//div[4]/a[1]/img')
    const rugName = $('//div[4]/a[2]/div/div/span')
    expect(rugImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1592838320/OCM%202.0/Apartment%20Page/Rugs.jpg')
    expect(rugName).toHaveText('Rugs')

      menuPage.Kitchen()
    //Kitchen
    const kitchenImg = $('//div[5]/a[1]/img')
    const kitchenName = $('//div[5]/a[2]/div/div/span')
    expect(kitchenImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1592838320/OCM%202.0/Apartment%20Page/Kitchen.jpg')
    expect(kitchenName).toHaveText('Kitchen')

      menuPage.organization()
    //Organization & Accessories
    const accessImg = $('//div[6]/a[1]/img')
    const accessName = $('//div[6]/a[2]/div/div/span')
    expect(accessImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1592838320/OCM%202.0/Apartment%20Page/Organization_Accessories.jpg')
    expect(accessName).toHaveText('Organization & Accessories')
  })

  it('Validate WELLNESS URL & Title', () => {
      menuPage.wellnessMenuOption()
    const wellness = $('//div[5]/div/div/a')
    expect($('//div[5]/div/div/a/h6')).toHaveText('Wellness')
    wellness.click()
    expect(browser).toHaveUrl('https://qa.ocm.com/dorm-life/wellness/air-purifiers')
    const title = $('//h1')
    expect(title).toHaveText('Results for Wellness Air Purifiers')
    
  })

  it('Validate GIFTS AND CARE PACKAGES Cat Page, Hero Img, Title and Sub Cats', () => {
      menuPage.carePackagesMenuOption()
    const carepackage = $('//div[6]/div/div/a')
    expect($('//div[6]/div/div/a/h6')).toHaveText('Gifts and Care Packages')
    carepackage.click()
    expect(browser).toHaveUrl('https://qa.ocm.com/gifts-and-care-packages/gifts-and-care-packages')
    
      menuPage.heroImgCarePackage()
    const heroImg = $('//div[1]/button/img')
    expect(heroImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1595872892/OCM%202.0/CWP%20Assets%20072420/CWP-Category-Hero-full-Width.jpg')

    const title = $('//h1' )
    expect(title).toHaveText('Gifts and Care Packages')

    const subTitle = $('//div[5]/div/div[1]/div[1]/p')
    expect(subTitle).toHaveText('Categories')

      menuPage.carePackagePlans()
    //Care Package Plans
    const carePkgImg = $('//div[2]/div[1]/a[1]/img')
    const carePkgName = $('//div[1]/a[2]/div/div/span')
    expect(carePkgImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1595632852/OCM%202.0/CWP%20Assets%20072420/Year_Full_of_Love-072420.jpg')
    expect(carePkgName).toHaveText('Care Package Plans')

      menuPage.Healthy()

    //Healthy
    const healthImg = $('//div[5]/div/div[2]/div[2]/a[1]/img')
    const healthName = $('//div[2]/a[2]/div/div/span')
    expect(healthImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1595632852/OCM%202.0/CWP%20Assets%20072420/Healthy-Package-072420.jpg')
    expect(healthName).toHaveText('Healthy')

      menuPage.birthday()
    //Birthday
    const comfortImg = $('//div[3]/a[1]/img')
    const comfortName = $('//div[3]/a[2]/div/div/span')
    expect(comfortImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1595632980/OCM%202.0/CWP%20Assets%20072420/Birthday-072420.jpg')
    expect(comfortName).toHaveText('Birthday')

      menuPage.gourmet()
    //Gourmet
    const gourmetImg = $('//div[4]/a[1]/img')
    const gourmetName = $('//div[4]/a[2]/div/div/span')
    expect(gourmetImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1595632852/OCM%202.0/CWP%20Assets%20072420/Gourmet-072420.jpg')
    expect(gourmetName).toHaveText('Gourmet')

  })

  it('Validate GRADUATION Cat Page, Hero Img, Title and Sub Cats', () => {
    menuPage.graduationMenuOption()
    const graduation = $('//div[7]/div/div/a')
    expect($('//div[7]/div/div/a/h6')).toHaveText('Graduation')
    graduation.click()
    expect(browser).toHaveUrl('https://qa.ocm.com/graduation/graduation')

    menuPage.heroImgGraduation()
    const heroImg = $('//div[1]/button/img')
    expect(heroImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586211342/OCM%202.0/3%20-%20Category%20Heros/8%20-%20Graduation/Graduation-4.6.jpg')

    const title = $('//h1')
    expect(title).toHaveText('Graduation')

    const subTitle = $('//div[5]/div/div[1]/div[1]/p')
    expect(subTitle).toHaveText('Categories')

    menuPage.diplomaFrames()
    //Diploma Frames
    const diplomaImg = $('//div[2]/div[1]/a[1]/img')
    const diplomaName = $('//div[1]/a[2]/div/div/span')
    expect(diplomaImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586219188/OCM%202.0/4%20-%20Category%20Subslots/8%20-%20Graduation/Standard_Diploma_Frames-04.06.jpg')
    expect(diplomaName).toHaveText('Diploma Frames')

    menuPage.commemorativeGifts()
    //Commemorative Gifts
    const giftImg = $('//div[5]/div/div[2]/div[2]/a[1]/img')
    const giftName = $('//div[2]/a[2]/div/div/span')
    expect(giftImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586219511/OCM%202.0/4%20-%20Category%20Subslots/8%20-%20Graduation/Commemorative_Gifts-04.06.jpg')
    expect(giftName).toHaveText('Commemorative Gifts')

    menuPage.tasselToppers()
    //Tassel Toppers
    const tasselImg = $('//div[3]/a[1]/img')
    const tasselName = $('//div[3]/a[2]/div/div/span')
    expect(tasselImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1586219188/OCM%202.0/4%20-%20Category%20Subslots/8%20-%20Graduation/Tassel_Toppers-04.06.jpg')
    expect(tasselName).toHaveText('Tassel Toppers')

  })

  it('Validate ON SALE Cat Page, Hero Img, Title and Sub Cats', () => {
    menuPage.onSaleMenuOption()
    const onsale = $('//div[8]/div/div/a')
    expect($('//div[8]/div/div/a/h6')).toHaveText('On Sale')
    onsale.click()
    expect(browser).toHaveUrl('https://qa.ocm.com/sale/on-sale')

    menuPage.heroImgOnSale()
    const heroImg = $('//div[1]/button/img')
    expect(heroImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931217/OCM%202.0/3%20-%20Category%20Heros/9%20-%20On%20Sale/On_Sale.jpg')

    const title = $('//h1')
    expect(title).toHaveText('On Sale')

    const subTitle = $('//div[5]/div/div[1]/div[1]/p')
    expect(subTitle).toHaveText('Categories')

    menuPage.beddingOnSale()
    //Bedding
    const beddingImg = $('//div[2]/div[1]/a[1]/img')
    const beddingName = $('//div[1]/a[2]/div/div/span')
    expect(beddingImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931373/OCM%202.0/4%20-%20Category%20Subslots/9%20-%20On%20Sale/Bedding_.jpg')
    expect(beddingName).toHaveText('Bedding')

    menuPage.bathOnSale()
    //Bath
    const bathImg = $('//div[5]/div/div[2]/div[2]/a[1]/img')
    const bathName = $('//div[2]/a[2]/div/div/span')
    expect(bathImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931372/OCM%202.0/4%20-%20Category%20Subslots/9%20-%20On%20Sale/Bath.jpg')
    expect(bathName).toHaveText('Bath')

    menuPage.decorOnSale()
    //Decor
    const decorImg = $('//div[3]/a[1]/img')
    const decorName = $('//div[3]/a[2]/div/div/span')
    expect(decorImg).toHaveAttr('src', 'https://res.cloudinary.com/ocm/image/upload/v1585931372/OCM%202.0/4%20-%20Category%20Subslots/9%20-%20On%20Sale/Decor.jpg')
    expect(decorName).toHaveText('Decor')

  })

    
})