import { Router } from "express";
import { renderPrices } from "../controllers/views.controller.js";

const viewsRouter = Router();

viewsRouter.get("/", renderPrices);

export default viewsRouter;
