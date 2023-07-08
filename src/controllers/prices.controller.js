import { pricesService } from "../services/index.js";

export async function getPrices(req, res) {
	try {
		const prices = await pricesService.getPrices();
		res.status(200).json(prices);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export async function getPriceByDate(req, res) {
	try {
		const price = await pricesService.getPriceByDate(req.params.date);
		if (price) {
			res.status(200).json(price);
		} else {
			res.status(404).send("Price not found");
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
			res.status(404).send("Price not found");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
}

export async function createPrice(req, res) {
	try {
		const price = await pricesService.createPrice(req.body);
		res.status(201).json(price);
	} catch (error) {
		res.status(500).send(error.message);
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
