import test,{ expect } from '@playwright/test'
test ("Alerts & Frames",async({page})=> {

    page.on('dialog',at=>{
    console.log(at.message())
    console.log(at.type())
    at.accept()
    })  
    
    
    
    
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    await page.frameLocator("[name='iframeResult']").getByText("Try It").click()
    await page.waitForTimeout(2000)
    const text=await page.frameLocator("[name='iframeResult']").locator("[id='demo']").innerText()
    expect(text).toContain('You pressed OK!')

})
