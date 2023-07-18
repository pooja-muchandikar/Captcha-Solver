const { test, expect, chromium }=require('@playwright/test');
const { solveCaptcha }=require('../utils/solveCaptcha');

test('Validate Forms Captcha', async () => {
test.setTimeout(60000);

  const browser = await chromium.launch({
    headless: false,
    args: [
        '--disable-site-isolation-trials',
        '--disable-features=site-per-process,SitePerProcess',
        '--disable-blink-features=AutomationControlled',
    ],

});

const ctx = await browser.newContext();
const page = await ctx.newPage();

  await page.goto('https://www.google.com/recaptcha/api2/demo');
  await page.waitForTimeout(2000);
  await solveCaptcha(page);
  await page.waitForTimeout(2000);
});