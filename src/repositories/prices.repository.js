import { pricesModel } from "../models/prices.model.js";

class PricesRepository {
	async getPrices() {
		const prices = await pricesModel
			.find({})
			.sort({
				date: "desc",
			})
			.lean();
		return prices;
	}

	async getPrice(id) {
		const price = await pricesModel.findById(id);
		return price;
	}

	async getPriceByDate(date) {
		const price = await pricesModel.findOne({ date: date });
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
