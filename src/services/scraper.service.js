import puppeteer from "puppeteer";

const url =
	"https://www.cmegroup.com/markets/energy/crude-oil/brent-crude-oil-last-day.settlements.html";

const dataTypeSelectorText =
	"#productTabData > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(6) > div > div > h4";

const dateSelectorText =
	"#productTabData > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div.trade-date-row.row > div > div > div > button > span";

const settleSelectorText =
	"#productTabData > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(8) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7)";

async function getPrice(url) {
	// Launch the browser and open a new blank page
	const browser = await puppeteer.launch({
		headless: "new",
	});

	const page = await browser.newPage();
	await page.goto(url);
	await page.setViewport({ width: 1080, height: 1024 });

	// Locate the selectors
	const dataTypeSelector = await page.waitForSelector(dataTypeSelectorText);
	const dateSelector = await page.waitForSelector(dateSelectorText);
	const settleSelector = await page.waitForSelector(settleSelectorText);

	// Get content of selectors
	const dataTypeContent = await dataTypeSelector?.evaluate(
		(el) => el.textContent
	);
	const dateContent = await dateSelector?.evaluate((el) => el.textContent);
	const settleContent = await settleSelector?.evaluate((el) => el.textContent);

	// Close the browser
	await browser.close();

	// Return full response
	return {
		dataType: dataTypeContent,
		date: new Date(dateContent),
		settle: Number(settleContent),
	};
}

class ScraperService {
	constructor() {
		this.url = url;
	}

	async getScrapedPrice() {
		const price = await getPrice(this.url);
		// console.log(price);
		return price;
	}
}

export default ScraperService;
