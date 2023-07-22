import { pricesService } from "../services/index.js";

export async function renderPrices(req, res) {
	try {
		const prices = await pricesService.getPrices();
		return res.render("prices", { prices });
	} catch (error) {
		return res.status(500).send(error.message);
	}
}
