import { Router } from "express";
import {
	getPrices,
	getPrice,
	createPrice,
	updatePrice,
	deletePrice,
} from "../controllers/prices.controller.js";

const pricesRouter = Router();

pricesRouter.get("/", getPrices);
pricesRouter.get("/:id", getPrice);
pricesRouter.post("/", createPrice);
pricesRouter.put("/:id", updatePrice);
pricesRouter.delete("/:id", deletePrice);

export default pricesRouter;
