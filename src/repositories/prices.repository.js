import { pricesModel } from "../models/prices.model.js";

class PricesRepository {
	async getPrices() {
		const prices = await pricesModel.find();
		return prices;
	}

	async getPrice(id) {
		const price = await pricesModel.findById(id);
		return price;
	}

	async createPrice(price) {
		const createdPrice = await pricesModel.create(price);
		return createdPrice;
	}

	async updatePrice(id, price) {
		const updatedPrice = await pricesModel.findByIdAndUpdate(id, price, {
			new: true,
		});
		return updatedPrice;
	}

	async deletePrice(id) {
		const deletedPrice = await pricesModel.findByIdAndDelete(id);
		return deletedPrice;
	}
}

export default PricesRepository;
