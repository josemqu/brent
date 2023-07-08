import { pricesRepository } from "../repositories/index.js";

class PriceService {
	async getPrices() {
		const prices = await pricesRepository.getPrices();
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
