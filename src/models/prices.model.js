import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const pricesCollection = "prices";

const pricesSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
});

pricesSchema.plugin(mongoosePaginate);

export const pricesModel = mongoose.model(pricesCollection, pricesSchema);
