const puppeteer = require('puppeteer');
import { validateValue } from './util.js'


test('should be a validate input', () => {

    const text = ""

    const inputName = validateValue('Name')
    expect(inputName.isEmpty(text)).toBeTruthy()

})

test('should be a validate input', () => {

    const text = ""

    const inputPassword = validateValue('Password')
    expect(inputPassword.isEmpty(text)).toBeTruthy()

})


test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 20,
        args: ['--window-size = 1920, 1080']
    })

    const page = await browser.newPage()
    await page.goto(
        'file:///D:/saul.gomez/Documents/SaulGomez/Front_end/javascript-projects/sesion-user/index.html'
    );

    // await page.click('input#name');
    // await page.type('input#name', 'saul');
    await page.click('input#verifiedPassword');
    await page.type('input#verifiedPassword', '1234567890');
    await page.click('#btn')



}, 10000)


