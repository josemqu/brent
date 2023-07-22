import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const pricesCollection = "prices";

const pricesSchema = new mongoose.Schema({
	settle: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		unique: true,
		required: true,
	},
});

pricesSchema.plugin(mongoosePaginate);

export const pricesModel = mongoose.model(pricesCollection, pricesSchema);
