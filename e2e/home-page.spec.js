const puppeteer = require('puppeteer');
/* Home Page experimental tests with Puppeteer and Jasmin, needs more work;) */

const URL = 'https://www.sunnuclear.com';

describe('Home Page', function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    let browser = null;
    let page = null;

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
        await page.goto(URL);
    });

    afterAll(async () => {
        await browser.close();
    });

    it('verify that page title is correct', async () => {
        const title = await page.title();
        expect(title).toBe('Sun Nuclear - Patient Safety Starts Here');
    });

    it('verify that footer alert is displayed', async () => {
        const alert = await page.$('footer.alert');
        expect(alert).toBeTruthy();
    })

    it('verify that footer alert is closed', async () => {
        await page.$('a.alert__close');
        await page.click('a.alert__close', {clickCount: 1});
    })

    it('verify that site-footer is displayed', async () => {
        const footer = await page.$('footer.site-footer');
        expect(footer).toBeTruthy();
    })
});