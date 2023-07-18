// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    retries: 1,
    reporter: [ ['html', { open: 'never' }] ],
    use: {
      trace: 'on-first-retry',
      baseURL: 'https://www.google.com/recaptcha/api2/demo',
      video: 'on-first-retry',
    },
  };
  
  module.exports = config;