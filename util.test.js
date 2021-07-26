const puppeteer = require('puppeteer');
const jest = require('jest')
const  { validateValue, showMessages } = require(util)


test('should be a massage', () => {
    let messages = ['Nombre es requiered', 'Password is requiered'] 

})


test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 20,
        args: ['--window-size = 1920, 1080']
    })

    const page = await browser.newPage()
    await page.goto(
        'http://127.0.0.1:5500/index.html'
    );

    // await page.click('input#name');
    // await page.type('input#name', 'saul');
    await page.click('input#verifiedPassword');
    await page.type('input#verifiedPassword', '1234567890');
    await page.click('#btn')



}, 10000)


