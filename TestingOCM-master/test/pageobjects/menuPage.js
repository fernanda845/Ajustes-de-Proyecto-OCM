const Page = require('./page');
const homeData = require('../test-data/homePage.json')

class MenuPage extends Page {

    //Bedding
    get beddingRef () { return $('//div[1]/div/div/a') }
    get beddingMenu () { return $('//div[1]/div/div/a/h6') }
    //get beddingTitle () { return homeData.menu.bedding.title}//
    //get beddingUrl () { return homeData.menu.bedding.url } //
   
    get heroImgRef (){return $('//div[1]/button/img')} 
    get src () { return $('src') } //Defined 
    //get heroImgUrl () {return homeData.menu.heroImg.heroUrl}//
    get titleRef () { return $('//h1') } 
    get subTitleRef () { return $('//div[5]/div/div[1]/div[1]/p')} //Defined
    //get subTitleCat () { return homeData.subTitle }//Defined
    //Bedding - Value Paks
    get valuePakImage () { return $('//div[2]/div[1]/a[1]/img') }
    get valuePakName () { return $('//div[1]/a[2]/div/div/span') }
    //get valuePakUrl () { return homeData.menu.bedding.valuePaks.url}
    //get valueProdName () { return homeData.menu.bedding.valuePaks.productName}
    // Bedding -Sheets
    get sheetsImage () { return $('//div[5]/div/div[2]/div[2]/a[1]/img')}
    get sheetsName () {return $ ('//div[2]/a[2]/div/div/span')}
    //get sheetsUrl () {return homeData.menu.bedding.sheets.url}
    //get sheetsProdName () {return homeData.menu.bedding.sheets.productName}
    // Bedding- Comforters
    get comfortImage () {return $('//div[3]/a[1]/img')}
    get comfortName () {return $('//div[3]/a[2]/div/div/span')}
    //get comfortUrl () {return homeData.menu.bedding.comforters.url}
    //get comfortProdName () {return homeData.menu.bedding.comforters.productName}
    // Matress Pads
    get padImage () {return $('//div[4]/a[1]/img')}
    get padName () {return $ ('//div[4]/a[2]/div/div/span')}
    //get padUrl () {return homeData.menu.bedding.matressPads.url}
    //get padProdName () {return homeData.menu.bedding.matressPads.productName}
    // Pillows
    get pillowImage () {return $ ('//div[5]/a[1]/img')}
    get pillowName() {return $ ('//div[5]/a[2]/div/div/span')}
    //get pillowUrl () {return homeData.menu.bedding.pillows.url}
    //get pillowProdName () {return homeData.menu.bedding.pillows.productName}
    //Blankets and Throws
    get blanketImage () {return $ ('//div[6]/a[1]/img')}
    get blanketName () {return $ ('//div[6]/a[2]/div/div/span')}
    //get blanketUrl () {return homeData.menu.bedding.blankets.url}
    //get blanketProdName () {return homeData.menu.bedding.blankets.productName}
    // Headboards
    get headImage () {return $ ('//div[7]/a[1]/img')}
    get headName () {return $ ('//div[7]/a[2]/div/div/span')}
    //get headUrl () {return homeData.menu.bedding.headboards.url}
    //get headProdName () {return homeData.menu.bedding.headboards.productName}
    // BATH
    get bathRef () {return $('//div[2]/div/div/a')}
    get bathMenu () { return $('//div[2]/div/div/a/h6') }
    //get bathTitle () { return homeData.menu.bath.title}
    //get bathUrl () { return homeData.menu.bath.url }
    // HeroImage Bath
    get heroImgBathRef () {return $('//div[1]/button/img')}
    //get heroImgBathUrl () {return homeData.menu.bath.heroUrl}
    get titleBathRef () {return $('//h1')}
    //Towels
    get towelImage () {return $ ('//div[2]/div[1]/a[1]/img')}
    get towelName () {return $ ('//div[1]/a[2]/div/div/span')}
    //get towelUrl() {return homeData.menu.bath.towels.url}
    //get towelProdName () {return homeData.menu.bath.towels.productName}
    //Shower Paks
    get showerImage () {return $('//div[5]/div/div[2]/div[2]/a[1]/img')}
    get showerName () {return $ ('//div[2]/a[2]/div/div/span')}
    //get showerUrl () {return homeData.menu.bath.showerPaks.url}
    //get showerProdName () {return homeData.menu.bath.showerPaks.productName}
    //Bath Mats
    get bathMatsImage () {return $('//div[3]/a[1]/img')}
    get bathMatsName () {return $ ('//div[3]/a[2]/div/div/span')}
    //get bathMatsUrl () {return homeData.menu.bath.bathMats.url}
    //get bathMatsProdName () {return homeData.menu.bath.bathMats.productName}
    //laundry
    get laundryImage () {return $('//div[4]/a[1]/img')}
    get laundryName () {return $ ('//div[4]/a[2]/div/div/span')}
    //get laundryUrl () {return homeData.menu.bath.laundry.url}
    //get laundryProdName () {return homeData.menu.bath.laundry.productName}
    // DECOR
    get decorRef () { return $('//div[3]/div/div/a')}
    get decorMenu () { return $ ('//div[3]/div/div/a/h6')}
    //get decorTitle () {return homeData.menu.decor.title}
    //get decorUrl () {return homeData.menu.decor.url}
    // HeroImage Decor
    get heroImgDecorRef () {return $ ('//div[1]/button/img')}
    //get heroImgDecorUrl () {return homeData.menu.decor.url}
    get titleDecorRef () {return $('//h1')}
    // Rugs
    get rugImage () {return $('//div[2]/div[1]/a[1]/img')}
    get rugName () {return $ ('//div[1]/a[2]/div/div/span')}
    //get rugUrl() {return homeData.menu.decor.rugs.url}
    //get rugProdName () {return homeData.menu.decor.rugs.productName}
    // Storage
    get storageImage () {return $('//div[5]/div/div[2]/div[2]/a[1]/img')}
    get storageName () {return $ ('//div[2]/a[2]/div/div/span')}
    //get storageUrl () {return homeData.menu.decor.storage.url}
    //get storageProdName () {return homeData.menu.decor.storage.productName}
    // Organization
    get organizeImage () {return $ ('//div[3]/a[1]/img')}
    get organizeName () {return $ ('//div[3]/a[2]/div/div/span')}
    //get organizeUrl() {return homeData.menu.decor.organization.url}
    //get organizeProdName () {return homeData.menu.decor.organization.productName}
    //Housewares
    get houseImage () {return $('//div[4]/a[1]/img')}
    get houseName () {return $('//div[4]/a[2]/div/div/span')}
    //get houseUrl () {return homeData.menu.decor.housewares.url}
    //get houseProdName () {return homeData.menu.decor.housewares.productName}
    //Lighting
    get lightImage () {return $('//div[5]/a[1]/img')}
    get lightName () {return $ ('//div[5]/a[2]/div/div/span')}
    //get lightUrl () {return homeData.menu.decor.lighting.url}
    //get lightProdName () {return homeData.menu.decor.lighting.productName}
    //Frames
    get frameImage () {return $ ('//div[6]/a[1]/img')}
    get frameName () {return $ ('//div[6]/a[2]/div/div/span')}
    //get frameUrl () {return homeData.menu.decor.frames.url}
    //get frameProdName () {return homeData.menu.decor.frames.productName}
    //Mirrors
    get mirrorImage () {return $('//div[7]/a[1]/img')}
    get mirrorName () {return $ ('//div[7]/a[2]/div/div/span')}
    //get mirrorUrl () {return homeData.menu.decor.mirrors.url}
    //get mirrorProdName () {return homeData.menu.decor.mirrors.productName}
    //Wall Art
    get wallImage () {return $ ('//div[8]/a[1]/img')}
    get wallName () {return $ ('//div[8]/a[2]/div/div/span')}
    //get wallUrl () {return homeData.menu.decor.wallart.url}
    //get wallProdName () {return homeData.menu.decor.wallart.productName}
    //APARTMENTS
    get apartmentsRef () {return $ ('//div[4]/div/div/a')}
    get apartmentsMenu () {return $ ('//div[4]/div/div/a/h6')}
    //get apartmentsTitle () {return homeData.menu.apartments.title}
    //get apartmentsUrl () {return homeData.menu.apartments.url}
    
    // HeroImage Apartments
    get heroImgApartRef () {return $('//div[1]/button/img')}
    //get heroImgApartUrl () {return homeData.menu.apartments.heroUrl}
    get titleApartRef () {return $('//h1')}

    //Bedroom
    get bedPakImage () {return $ ('//div[2]/div[1]/a[1]/img')}
    get bedPakName () {return $ ('//div[1]/a[2]/div/div/span')}
    //get bedPakUrl () {return homeData.menu.apartments.bedroom.url}
    //get bedPakProdName () {return homeData.menu.apartments.bedroom.productName}

    //Bathroom
    get bathroomImage () {return $ ('//div[5]/div/div[2]/div[2]/a[1]/img')}
    get bathroomName () {return $ ('//div[2]/a[2]/div/div/span')}
    //get bathroomUrl () {return homeData.menu.apartments.bathroom.url}
    //get bathroomProdName () {return homeData.menu.apartments.bathroom.productName}

    //Decor
    get decorImage () {return $ ('//div[3]/a[1]/img')}
    get decorName () {return $ ('//div[3]/a[2]/div/div/span')}
    //get decorUrl () {return homeData.menu.apartments.decor.url}
    //get decorProdName () {return homeData.menu.apartments.decor.productName}

    //Rugs
    get rugsImage () {return $ ('//div[4]/a[1]/img')}
    get rugsName () {return $ ('//div[4]/a[2]/div/div/span')}
    //get rugsUrl () {return homeData.menu.apartments.rugs.url}
    //get rugsProdName () {return homeData.menu.apartments.rugs.productName}

    //Kitchen
    get KitchenImage () {return $ ('//div[5]/a[1]/img')}
    get KitchenName () {return $ ('//div[5]/a[2]/div/div/span')}
    //get kitchenUrl () {return homeData.menu.apartments.Kitchen.url}
    //get kitchenProdName () {return homeData.menu.apartments.kitchen.productName}

    //Organization & Accesories
    get accessImage () {return $ ('//div[6]/a[1]/img')}
    get accessName () {return $ ('//div[6]/a[2]/div/div/span')}
    //get accessUrl () {return homeData.menu.apartments.access.url}
    //get accessProdName () {return homeData.menu.apartments.access.productName}

    //Wellness
    get wellnessRef () {return $ ('//div[5]/div/div/a')}
    get wellnessM () {return $ ('//div[5]/div/div/a/h6')}

    //GIFTS AND CARE PACKAGES
    get carePackageRef () {return $ ('//div[6]/div/div/a')}
    get carePackageMenu () {return $ ('//div[6]/div/div/a/h6')}
    //get carePackageTitle () {return homeData.menu.carePackage.title}
    //get carePackageUrl () {return homeData.menu.carePackage.url}

    // HeroImage Gifts and carepackages
    get heroImgCareRef () {return $ ('//div[1]/button/img')}
    //get heroImgCareUrl () {return homeData.menu.carePackage.heroUrl}
    get TitleCareRef () {return $ ('//h1')}

    // Care Package Plans
    get carePkgPlanImage () {return $ ('//div[2]/div[1]/a[1]/img')}
    get carePkgPlanName () {return $ ('//div[1]/a[2]/div/div/span')}
    //get carePkgPlanUrl () {return homeData.menu.carePackage.carePkgPlan.url}
    //get carePkgPlanProdName () {return homeData.menu.carePackage.carePkgPlan.productName}
    //Healthy
    get healthImage () {return $('//div[5]/div/div[2]/div[2]/a[1]/img')}
    get healthName () {return $ ('//div[2]/a[2]/div/div/span')}
    //get healthUrl () {return homeData.menu.carePackage.health.url }
    //get healthProdName (){return homeData.menu.carePackage.health.productName}
    // Birthday
    get birthdayImage () {return $ ('//div[3]/a[1]/img')}
    get birthdayName () {return $ ('//div[3]/a[2]/div/div/span')}
    //get birthdayUrl () {return homeData.menu.carePackage.birthday.url}
    //get birthdayProdName() {return homeData.menu.carePackage.birthday.productName}
    // Gourmet
    get gourmetImage () {return $ ('//div[4]/a[1]/img')}
    get gourmetName () {return $ ('//div[4]/a[2]/div/div/span')}
    //get gourmetUrl () {return homeData.menu.carePackage.gourmet.url}
    //get gourmetProdName () {return homeData.menu.carePackage.gourmet.productName}
    // GRADUATION
    get graduationRef () {return $ ('//div[7]/div/div/a')}
    get graduationMenu () {return $ ('//div[7]/div/div/a/h6')}
    //get graduationTitle () {return homeData.menu.graduation.title}
    //get graduationUrl () {return homeData.menu.graduation.url}
    // HeroImage Graduation
    get heroImgGradRef () {return $ ('//div[1]/button/img')}
    //get heroImgGradUrl () {return homeData.menu.graduation.heroUrl}
    get titleGradRef () {return $ ('//h1')}
    // Diploma Frames
    get diplomaImage () {return $('//div[2]/div[1]/a[1]/img')}
    get diplomaName () {return $ ('//div[1]/a[2]/div/div/span')}
    //get diplomaUrl () {return homeData.menu.graduation.diploma.url}
    //get diplomaProdName () {return homegiftData.menu.graduation.diploma.productName}
    //Commemorative Gifts
    get giftImage () {return $('//div[5]/div/div[2]/div[2]/a[1]/img')}
    get giftName () {return $ ('//div[2]/a[2]/div/div/span')}
    //get giftUrl () {return homeData.menu.graduation.gift.url}
    //get giftProdName () {return homeData.menu.graduation.gift.productName}
    //Tassel Toppers
    get tasselImage () {return $('//div[3]/a[1]/img')}
    get tasselName () {return $('//div[3]/a[2]/div/div/span')}
    //get tasselUrl () {return homeData.menu.graduation.tassel.url}
    //get tasselProdName () {return homeData.menu.graduation.tassel.productName}
    //ON SALE
    get onSaleRef () {return $ ('//div[8]/div/div/a')}
    get onSaleMenu () {return $ ('//div[8]/div/div/a/h6')}
    //get onSaleTitle () {return homeData.menu.onSale.title}
    //get onSaleUrl () {return homeData.menu.onSale.url}
    //HeroImage On Sale
    get heroImgOnSaleRef () {return $ ('//div[1]/button/img')}
    //get heroImgOnSaleUrl () {return homeData.menu.onSale.heroUrl}
    get TitleOnSaleRef () {return $ ('//h1')}
    //Bedding
    get bedImage () {return $('//div[2]/div[1]/a[1]/img')}
    get bedName () {return $ ('//div[1]/a[2]/div/div/span')}
    //get beddingOnSaleUrl () {return homeData.menu.onSale.beddingOnSale.url}
    //get bedProdName () {return homeData.menu.onSale.beddingOnSale.productName}
    //Bath
    get bathImage () {return $('//div[5]/div/div[2]/div[2]/a[1]/img')}
    get bathName () {return $ ('//div[2]/a[2]/div/div/span')}
    //get bathOnSaleUrl () {return homeData.menu.onSale.bathOnSale.url}
    //get bathProdName () {return homeData.menu.onSale.bathOnSale.productName}
    //Decor
    get decImage () {return $ ('//div[3]/a[1]/img')}
    get decName () {return $ ('//div[3]/a[2]/div/div/span')}
    //get decorOnSaleUrl () {return homeData.menu.onSale.decorOnSale.url}
    //get decProdName () {return homeData.menu.onSale.decorOnSale.productName}


































    //METHODS
    beddingMenuOption (){
        //1. MENU Y CLICK BEDDING
        expect(this.beddingMenu).toHaveText(homeData.menu.bedding.title)
        this.beddingRef.click()
        expect(browser).toHaveUrl(homeData.menu.bedding.url)
    }
    heroImg () {
        //2. HERO IMAGE, TITLE Y SUBTITLE BEDDING
        expect(this.heroImgRef).toHaveAttr(this.src,  homeData.menu.heroImg.heroUrl)
        expect(this.titleRef).toHaveText(homeData.menu.bedding.title)
        expect(this.subTitleRef).toHaveText(homeData.subTitle)
    }
    valuePaks () {
        expect(this.valuePakImage).toHaveAttr(this.src,homeData.menu.bedding.valuePaks.url)
        expect(this.valuePakName).toHaveText(homeData.menu.bedding.valuePaks.productName)
    }
    sheets () {
        expect(this.sheetsImage).toHaveAttr(this.src,homeData.menu.bedding.sheets.url)
        expect(this.sheetsName).toHaveText(homeData.menu.bedding.sheets.productName)
    }
    comforters () {
        expect(this.comfortImage).toHaveAttr(this.src, homeData.menu.bedding.comforters.url)
        expect(this.comfortName).toHaveText(homeData.menu.bedding.comforters.productName)
    }
    matressPads(){
        expect(this.padImage).toHaveAttr(this.src, homeData.menu.bedding.matressPads.url)
        expect(this.padName).toHaveText(homeData.menu.bedding.matressPads.productName)
    }
    pillows(){
        expect(this.pillowImage).toHaveAttr(this.src,homeData.menu.bedding.pillows.url)
        expect(this.pillowName).toHaveText(homeData.menu.bedding.pillows.productName)
    }
    blankets () {
        expect(this.blanketImage).toHaveAttr(this.src,homeData.menu.bedding.blankets.url)
        expect(this.blanketName).toHaveText(homeData.menu.bedding.blankets.productName)
    }
    headboards () {
        expect(this.headImage).toHaveAttr(this.src,homeData.menu.bedding.headboards.url)
        expect(this.headName).toHaveText(homeData.menu.bedding.blankets.productName)
    }
    bathMenuOption (){
        //1. MENU Y CLICK BATH
        expect(this.bathMenu).toHaveText(homeData.menu.bath.title)
        this.bathRef.click()
        expect(browser).toHaveUrl(homeData.menu.bath.url )
    }
    heroImgBath () {
        //2. HERO IMAGE, TITLE Y SUBTITLE BATH
        expect(this.heroImgBathRef).toHaveAttr(this.src, homeData.menu.bath.heroUrl)
        expect(this.titleBathRef).toHaveText(homeData.menu.bath.title)
        expect(this.subTitleRef).toHaveText(homeData.subTitle)
    }
    towels() {
        expect(this.towelImage).toHaveAttr(this.src,homeData.menu.bath.towels.url)
        expect(this.towelName).toHaveText(homeData.menu.bath.towels.productName)
    }
    showerPaks() {
        expect(this.showerImage).toHaveAttr(this.src,homeData.menu.bath.showerPaks.url)
        expect(this.showerName).toHaveText(this.src,homeData.menu.bath.showerPaks.productName)
    }
    bathMats () {
        expect(this.bathMatsImage).toHaveAttr(this.src,homeData.menu.bath.bathMats.url)
        expect(this.bathMatsName).toHaveText(homeData.menu.bath.bathMats.productName)
    }
    laundry () {
        expect(this.laundryImage).toHaveAttr(homeData.menu.bath.laundry.url)
        expect(this.laundryName).toHaveText(homeData.menu.bath.laundry.productName)
        
    }
    decorMenuOption () {
        //1. MENU Y CLICK DECOR
        expect(this.decorMenu).toHaveText(homeData.menu.decor.title)
        this.decorRef.click()
        expect(browser).toHaveUrl(homeData.menu.decor.url)
    }
    heroImgDecor () {
        //2. HERO IMAGE, TITLE Y SUBTITLE BATH
        expect(this.heroImgDecorRef).toHaveAttr(this.src,homeData.menu.decor.url)
        expect(this.titleRef).toHaveText(homeData.menu.decor.title)
        expect(this.subTitleRef).toHaveText(homeData.subTitle)
    }
    rugs () {
        expect(this.rugImage).toHaveAttr(homeData.menu.decor.rugs.url)
        expect(this.rugName).toHaveText(homeData.menu.decor.rugs.productName)
    }
    storage () {
        expect(this.storageImage).toHaveAttr(homeData.menu.decor.storage.url)
        expect(this.storageName).toHaveText(homeData.menu.decor.storage.productName)
    }
    organization () {
        expect(this.organizeImage).toHaveAttr(homeData.menu.decor.organization.url)
        expect(this.organizeName).toHaveText(homeData.menu.decor.organization.productName)

    }
    housewares () {
        expect(this.houseImage).toHaveAttr(homeData.menu.decor.housewares.url)
        expect(this.houseName).toHaveText(homeData.menu.decor.housewares.productName)       
    }
    lighting () {
        expect(this.lightImage).toHaveAttr(homeData.menu.decor.lighting.url)
        expect(this.lightName).toHaveText(homeData.menu.decor.lighting.productName)
    }    
    frames () {
        expect(this.frameImage).toHaveAttr(homeData.menu.decor.frames.url)
        expect(this.frameName).toHaveText(homeData.menu.decor.frames.productName)
    }
    mirrors () {
        expect(this.mirrorImage).toHaveAttr(homeData.menu.decor.mirrors.url)
        expect(this.mirrorName).toHaveText(homeData.menu.decor.mirrors.productName)
    }
    wallart () {
        expect(this.wallImage).toHaveAttr(homeData.menu.decor.wallart.url)
        expect(this.wallName).toHaveText(homeData.menu.decor.wallart.productName)
    }
    apartmentsMenuOption() {
        //1. MENU Y CLICK APARTMENTS
        expect(this.apartmentsMenu).toHaveText(homeData.menu.apartments.title)
        this.apartmentsRef.click()
        expect(browser).toHaveUrl(homeData.menu.decor.url)
    }
    heroImgapartments () {
        //2. HERO IMAGE, TITLE Y SUBTITLE APARTMENTS
        expect(this.heroImgApartRef).toHaveAttr(this.src, homeData.menu.apartments.heroUrl)
        expect(this.titleRef).toHaveText(homeData.menu.apartments.title)
        expect(this.subTitleRef).toHaveText(homeData.subTitle)
    }
    bedroom () {
        expect(this.bedPakImage).toHaveAttr(homeData.menu.apartments.bedroom.url)
        expect(this.bedPakName).toHaveText(homeData.menu.apartments.bedroom.productName)

    }
    bathroom () {
        expect(this.bathroomImage).toHaveAttr(homeData.menu.apartments.bathroom.url)
        expect(this.bathroomName).toHaveText(homeData.menu.apartments.bathroom.productName)
    }
    decor () {
        expect(this.decorImage).toHaveAttr(homeData.menu.decor.url)
        expect(this.decorName).toHaveText(homeData.menu.apartments.decor.productName)
    }
    rugs () {
        expect(this.rugsImage).toHaveAttr(homeData.menu.apartments.rugs.url)
        expect(this.rugsName).toHaveText(homeData.menu.apartments.rugs.productName)
    }
    Kitchen () {
        expect(this.KitchenImage).toHaveAttr(homeData.menu.apartments.Kitchen.url)
        expect(this.KitchenName).toHaveText( homeData.menu.apartments.kitchen.productName)
    }
    organization () {
        expect(this.organizeImage).toHaveAttr(homeData.menu.decor.organization.url)
        expect(this.organizeName).toHaveText(homeData.menu.decor.organization.productName)
    }
    wellnessMenuOption () {

    }
    carepackageMenuOption () {
        //1. MENU Y CLICK CAREPACKAGES
        expect(this.carepackageMenu).toHaveText(this.carepackageTitle)
        this.carepackageRef.click()
        expect(browser).toHaveUrl(this.carepackageUrl)
    }
    heroImgCarePackage () {
        //2. HERO IMAGE, TITLE Y SUBTITLE GIFTS AND CARE PACKAGES
        expect(this.heroImgCareRef).toHaveAttr(this.src,homeData.menu.carePackage.heroUrl)
        expect(this.TitleCareRef).toHaveText(homeData.menu.carePackage.title)
        expect(this.subTitleRef).toHaveText(homeData.subTitle)
    }
    carePackagePlans () {
        expect(this.carePkgPlanImage).toHaveAttr(homeData.menu.carePackage.carePkgPlan.url)
        expect(this.carePkgPlanName).toHaveText(homeData.menu.carePackage.carePkgPlan.productName)
    }
    Healthy () {
        expect(this.healthImage).toHaveAttr(homeData.menu.carePackage.health.url)
        expect(this.healthName).toHaveText(homeData.menu.carePackage.health.productName)
    }
    birthday () {
        expect(this.birthdayImage).toHaveAttr(homeData.menu.carePackage.birthday.url)
        expect(this.birthdayName).toHaveText(homeData.menu.carePackage.birthday.productName)
    }
    gourmet () {
        expect(this.gourmetImage).toHaveAttr(homeData.menu.carePackage.gourmet.url)
        expect(this.gourmetName).toHaveText(homeData.menu.carePackage.gourmet.productName)     
    }
    graduationMenuOption () {
        //1. MENU Y CLICK GRADUATION
        expect(this.graduationMenu).toHaveText(homeData.menu.graduation.title)
        this.graduationRef.click()
        expect(browser).toHaveUrl(homeData.menu.graduation.url)     

    }
    heroImgGraduation () {
        //2. HERO IMAGE, TITLE Y SUBTITLE GIFTS AND CARE PACKAGES
        expect(this.heroImgGradRef).toHaveAttr(this.src,homeData.menu.graduation.heroUrl)
        expect(this.TitleGradRef).toHaveText(homeData.menu.graduation.title)
        expect(this.subTitleRef).toHaveText(homeData.subTitle)
    }
    diplomaFrames () {
        expect(this.diplomaImage).toHaveAttr(homeData.menu.graduation.diploma.url)
        expect(this.diplomaName).toHaveText(homegiftData.menu.graduation.diploma.productName)
    }
    commemorativeGifts () {
        expect(this.giftImage).toHaveAttr(homeData.menu.graduation.gift.url)
        expect(this.giftName).toHaveText(homeData.menu.graduation.gift.productName)

    }
    tasselToppers () {
        expect(this.tasselImage).toHaveAttr(homeData.menu.graduation.tassel.url)
        expect(this.tasselName).toHaveText(homeData.menu.graduation.tassel.productName)
    }
    onSaleMenuOption () {
          //1. MENU Y CLICK On SALE
        expect(this.onSaleMenu).toHaveText(homeData.menu.onSale.title)
        this.onSaleRef.click()
        expect(browser).toHaveUrl(homeData.menu.onSale.url)                
    }
    heroImgOnSale () {
        //2. HERO IMAGE, TITLE Y SUBTITLE ON SALE
        expect(this.heroImgOnSaleRef).toHaveAttr(this.src,homeData.menu.onSale.heroUrl)
        expect(this.TitleOnSaleRef).toHaveText(homeData.menu.onSale.title)
        expect(this.subTitleRef).toHaveText(homeData.subTitle )
    }
    beddingOnSale () {
        expect(this.bedImage).toHaveAttr(homeData.menu.onSale.beddingOnSale.url)
        expect(this.bedName).toHaveText(thomeData.menu.onSale.beddingOnSale.productName)
    }
    bathOnSale () {
        expect(this.bathImage).toHaveAttr(homeData.menu.onSale.bathOnSale.url)
        expect(this.bathName).toHaveText(homeData.menu.onSale.bathOnSale.productName)
    }
    decorOnSale () {
        expect(this.decImage).toHaveAttr(homeData.menu.onSale.decorOnSale.url)
        expect(this.decName).toHaveText(homeData.menu.onSale.decorOnSale.productName)
    }





    

}

module.exports = new MenuPage()