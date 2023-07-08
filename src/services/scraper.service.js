import * as cheerio from "cheerio";
import axios from "axios";
import * as fs from "fs";
import puppeteer from "puppeteer";

const url = "https://www.tradingview.com/symbols/ICEEUR-BRN1!/";

const selector =
	"#js-category-content > div.tv-category-symbol-header > div.js-symbol-page-header-root > div > div > div > div.quotesRow-pAUXADuj > div:nth-child(1) > div > div.lastContainer-JWoJqCpY > span.last-JWoJqCpY.js-symbol-last > span";

async function getInnerText(url, selector) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const texto = await page.evaluate((selector) => {
		const elemento = document.querySelector(selector);
		return elemento.innerText;
	}, selector);

	await browser.close();

	return texto;
}

const getYesterdayDate = () => {
	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1);
	return yesterday.toISOString().slice(0, 10);
};

class ScraperService {
	constructor() {
		this.url = url;
		this.selector = selector;
	}

	async getScrapedPrice() {
		const price = {
			date: getYesterdayDate(),
			price: Number(await getInnerText(this.url, this.selector)),
		};

		return price;
	}
}

export default ScraperService;
