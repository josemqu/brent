import { Router } from "express";
import usersRouter from "./prices.router.js";

const routerAPI = (app) => {
	const router = Router();
	app.use("/api/v1", router);

	router.use("/prices", usersRouter);
};

export default routerAPI;
