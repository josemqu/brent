import * as cheerio from "cheerio";
import axios from "axios";
import * as fs from "fs";
import puppeteer from "puppeteer";

const url =
	"https://www.cmegroup.com/markets/energy/crude-oil/brent-crude-oil-last-day.settlements.html";

const dateSelectorText =
	"#productTabData > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div.trade-date-row.row > div > div > div > button > span";

const priceSelectorText =
	"#productTabData > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(8) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7)";

async function getInnerText(url, selector) {
	// Launch the browser and open a new blank page
	const browser = await puppeteer.launch({
		headless: "new",
	});

	const page = await browser.newPage();
	await page.goto(url);
	await page.setViewport({ width: 1080, height: 1024 });

	// Locate the date and price selectors
	const dateSelector = await page.waitForSelector(dateSelectorText);
	const priceSelector = await page.waitForSelector(priceSelectorText);

	// Get content of date and price selectors
	const dateContent = await dateSelector?.evaluate((el) => el.textContent);
	const priceContent = await priceSelector?.evaluate((el) => el.textContent);

	// Print full date and price
	console.log("The date of this blog post is %s.", dateContent);
	console.log("The price of this blog post is %s.", priceContent);

	// Close the browser
	await browser.close();

	// Return full response
	return { date: dateContent, price: priceContent };
}

class ScraperService {
	constructor() {
		this.url = url;
		this.priceSelector = priceSelectorText;
		this.dateSelector = dateSelectorText;
	}

	async getScrapedPrice() {
		const data = await getInnerText(this.url, this.selector);

		const price = {
			date: new Date(data.date),
			price: Number(data.price),
		};

		console.log(price);

		return price;
	}
}

export default ScraperService;
