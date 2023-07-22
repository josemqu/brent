import { pricesRepository } from "../repositories/index.js";

class PriceService {
	async getPrices() {
		const prices = await pricesRepository.getPrices();

		// convert prices dates toLocaleString 'es-AR'
		const dateOptions = {
			weekday: "short",
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		prices.map((price) => {
			price.date = new Date(price.date).toLocaleDateString(
				"es-AR",
				dateOptions
			);
		});

		// convert prices toLocaleString 'es-AR'
		const priceOptions = {
			style: "currency",
			currency: "ARS",
			minimumFractionDigits: 2,
		};

		prices.map((price) => {
			price.settle = new Intl.NumberFormat("es-AR", priceOptions).format(
				price.settle
			);
		});

		return prices;
	}

	async getPrice(id) {
		const price = await pricesRepository.getPrice(id);
		return price;
	}

	async getPriceByDate(date) {
		const price = await pricesRepository.getPriceByDate(date);
		return price;
	}

	async createPrice(price) {
		const createdPrice = await pricesRepository.createPrice(price);
		return createdPrice;
	}

	async updatePrice(id, price) {
		const updatedPrice = await pricesRepository.updatePrice(id, price);
		return updatedPrice;
	}

	async deletePrice(id) {
		const deletedPrice = await pricesRepository.deletePrice(id);
		return deletedPrice;
	}
}

export default PriceService;
