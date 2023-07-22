import express from "express";
import MongoStore from "connect-mongo";
import database from "./db.js";
import routerAPI from "./routes/routes.js";
import __dirname from "./utils.js";
import config from "./config/config.js";
import cors from "./middlewares/cors.js";
import handlebars from "express-handlebars";
import morgan from "morgan";

// Initialization
const { DB_USER, DB_PASS, DB_NAME, DB_URL, SESSION_SECRET } = config;
const app = express();
const PORT = process.env.PORT || 8080;

// Settings
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

//Instance handlebars for registering a helper
const hbs = handlebars.create({});

//Register handlebars helper for number formatting
hbs.handlebars.registerHelper("formatNumber", function (number) {
	return new Intl.NumberFormat("es-AR").format(number);
});

app.use(
	express.json({
		type: ["application/json", "text/plain"],
	})
);

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(`${__dirname}/public`));
app.use(cors);
app.use(morgan("dev"));

// Database connection
database.connect();

// Routes
routerAPI(app);

app.listen(PORT, (req, res) => {
	console.log(`Server listening on port ${PORT}`);
});
