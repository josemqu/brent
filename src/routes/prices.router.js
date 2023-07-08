import { Router } from "express";
import {
	getPrices,
	getPrice,
	getPriceByDate,
	getScrapedPrice,
	createPrice,
	updatePrice,
	deletePrice,
} from "../controllers/prices.controller.js";

const pricesRouter = Router();

pricesRouter.get("/", getPrices);
pricesRouter.get("/:id", getPrice);
pricesRouter.get("/:date", getPriceByDate);
pricesRouter.get("/scraped/price/", getScrapedPrice);
pricesRouter.post("/", createPrice);
pricesRouter.put("/:id", updatePrice);
pricesRouter.delete("/:id", deletePrice);

export default pricesRouter;
