describe ('accesibility id ',()=>{
    it('Find ID',async()=>{
    const idapp=await $('~App');
    await idapp.click();
    await idapp.click();
    const idaction=await $('~Action Bar');
    await expect(idaction).toBeExisting();

})
it('Find class name',async()=>{
    
    const idaction=await $('android.widget.TextView');
    console.log(await idaction.getText());
})

it('Find text value',async()=>{
    
    const idaction=await $('~App');
    await idaction.click();
    const idactionpath=await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    await idactionpath.click();
    const idactionpath2=await $('//android.widget.Button[@content-desc="List dialog"]');
    await idactionpath2.click();
    const idactionpath3=await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Command one"]');
    await expect(idactionpath3).toHaveText('Command one');
   
})

it('find array',async()=>{
const expectedList = [
    'API Demos', "Access'ibility",
    'Accessibility', 'Animation',
    'App', 'Content',
    'Graphics', 'Media',
    'NFC', 'OS',
    'Preference', 'Text',
    'Views'
  ]
  const actual=[]
  const idaction=await $$('android.widget.TextView');
  for (const element of idaction)
    actual.push(await element.getText())
    await expect(actual).toEqual(expectedList)
  })
  it.only('enter text',async()=>{
    const viewselement=await $('~Views')
    await viewselement.click()
    const autoelement=await $('~Auto Complete')
    await autoelement.click()
    const viewsScreen=await $('//android.widget.TextView[@content-desc="1. Screen Top"]')
    await viewsScreen.click()
    const viewsText=await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
    await viewsText.addValue('sample')
    await expect(viewsText).toHaveText('sample')
  })

})

