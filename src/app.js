import express from "express";
import MongoStore from "connect-mongo";
import database from "./db.js";
import routerAPI from "./routes/routes.js";
import __dirname from "./utils.js";
import config from "./config/config.js";

// Initialization
const { DB_USER, DB_PASS, DB_NAME, DB_URL, SESSION_SECRET } = config;
const app = express();
const PORT = process.env.PORT || 8080;

app.use(
	express.json({
		type: ["application/json", "text/plain"],
	})
);

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(`${__dirname}/public`));

// Database connection
database.connect();

// Routes
routerAPI(app);

app.listen(PORT, (req, res) => {
	console.log(`Server listening on port ${PORT}`);
});
