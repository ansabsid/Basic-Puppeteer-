const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
   width: 1000,
   height: 1000,
 });
  await page.goto(' https://www.google.com/ ');
  await page.screenshot({path: 'image3.png'});

  await browser.close();
})();
