import cors from "cors";
import config from "../config/config.js";

const { CLIENT_URL } = config;
// get client url for CORS configuration purposes
const corsOptions = {
	origin: CLIENT_URL,
	optionsSuccessStatus: 200,
};

export default cors(corsOptions);
