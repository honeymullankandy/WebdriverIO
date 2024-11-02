describe("start activity",()=>{
    it("start alert", async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        await expect(await($('//android.widget.TextView[@text="App/Alert Dialogs"]'))).toExist();
        await($('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]')).click();
        await driver.acceptAlert();
        await expect(await($('//android.widget.TextView[@resource-id="android:id/alertTitle"]'))).not.toExist()
       


    })
    it.only('scorll to view',async()=>{
        await $('~App').click()
        await $('~Activity').click()
        await driver.pause(2000)
       // await $('~Secure Surfaces').scrollIntoView()
       const selector = 'new UiScrollable(new UiSelector().scrollable(true).instance(0))' +
                         '.scrollIntoView(new UiSelector().text("${Secure Surfaces}").instance(0));';
    })

})