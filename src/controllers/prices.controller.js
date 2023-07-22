import { pricesService, scraperService } from "../services/index.js";

export async function getPrices(req, res) {
	try {
		const prices = await pricesService.getPrices();
		return res.status(200).json(prices);
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

export async function getPriceByDate(req, res) {
	try {
		const price = await pricesService.getPriceByDate(req.params.date);
		if (price) {
			res.status(200).json(price);
		} else {
			res.status(404).send("Price not found 1");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export async function getScrapedPrice(req, res) {
	try {
		const price = await scraperService.getScrapedPrice();
		if (price) {
			res.status(200).json(price);
		} else {
			res.status(404).send("Price not found 2");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export async function getPrice(req, res) {
	try {
		const price = await pricesService.getPrice(req.params.id);
		if (price) {
			res.status(200).json(price);
		} else {
			res.status(404).send("Price not found 3");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export async function createPrice(req, res) {
	try {
		const price = await pricesService.createPrice(req.body);
		res
			.status(201)
			.send({ ok: true, result: "Price created successfully", payload: price });
	} catch (error) {
		res
			.status(500)
			.send({ ok: false, result: "Price not created", message: error.message });
	}
}

export async function updatePrice(req, res) {
	try {
		const price = await pricesService.updatePrice(req.params.id, req.body);
		res.status(200).json(price);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export async function deletePrice(req, res) {
	try {
		const price = await pricesService.deletePrice(req.params.id);
		res.status(200).json(price);
	} catch (error) {
		res.status(500).send(error.message);
	}
}
