import test, { expect } from '@playwright/test'

test("Edit Lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByRole("textbox",{name:'Username'}).fill('Demosalesmanager')
    await page.getByText("Password").fill('crmsfa')
    await page.getByRole("button",{name:'Login'}).click()
    await page.waitForTimeout(3000)
    await page.getByRole("link",{name:'CRM/SFA'}).click()
    await page.getByRole("link",{name:'Leads'}).click()
    await page.waitForTimeout(3000)
    await page.getByRole("link",{name:'Find Leads'}).click()
    await page.getByRole("textbox",{name:'First name'}).fill('Vaidy')
    await page.getByRole("button",{name:'Find Leads'}).click()
    await page.getByRole("link",{name:'Vaidy'}).first().click()
    await page.waitForTimeout(3000)
    await page.getByRole("link",{name:'Edit'}).click()
    await page.locator("//input[@id='updateLeadForm_companyName']").clear()
    await page.locator("//input[@id='updateLeadForm_companyName']").fill('TL')
    await page.locator("//input[@id='updateLeadForm_annualRevenue']").clear()
    await page.locator("//input[@id='updateLeadForm_annualRevenue']").fill('2000000')
    await page.locator("//input[@id='updateLeadForm_departmentName']").clear()
    await page.locator("//input[@id='updateLeadForm_departmentName']").fill('Testing')
    await page.locator("//textarea[@id='updateLeadForm_description']").fill('Lead Update')
    await page.waitForTimeout(3000)
    await page.getByRole("button",{name:'Update'}).click()


    //Auto-Retry
    console.log("Auto-Retry")
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("TL")
    await expect.soft(page.locator("#viewLead_annualRevenue_sp")).toContainText("2,000,000")
    await expect(page.locator("#viewLead_departmentName_sp")).toContainText("Testing")
    await expect(page.locator("#viewLead_description_sp")).toContainText("Lead Update")
    await page.waitForTimeout(3000)
})