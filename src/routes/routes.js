import { Router } from "express";
import pricesRouter from "./prices.router.js";

const routerAPI = (app) => {
	const router = Router();
	app.use("/api/v1", router);
	router.use("/prices", pricesRouter);
};

export default routerAPI;
