const puppeteer = require('puppeteer')

async function scrapeProduct(id) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);
}

scrapeProduct()