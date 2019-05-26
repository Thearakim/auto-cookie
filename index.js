console.log('Hello');
const puppeteer = require('puppeteer');
(async () => {
 const browser = await puppeteer.launch({
 	headless: false,
 	args: ['--window-size=550,700', '--window-position=50,50']
 });
 const page = await browser.newPage();
 await page.goto('https://orteil.dashnet.org/cookieclicker/', {waitUntil: 'domcontentloaded'});
 await page.waitFor(10000);
 for (let i = 0; i<100; i++)
 {
 	await page.click('#bigCookie');
 }
})();