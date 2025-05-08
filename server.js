import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from "./config/connections.js";
import { engine, create } from "express-handlebars";
import session from "express-session";
import connectSessionSequelize from "connect-session-sequelize";
const SequelizeStore = connectSessionSequelize(session.Store);
import controller from "./controller/index.js";
import helpers from "./utils/helpers.js";
import "dotenv/config";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
const PORT = process.env.PORT || 3001;

/**
 * Express middleware configuration
 */
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from 'public' directory

// Configure session
const sess = {
  secret: process.env.SECRET_KEY, // Use environment variable in production
  cookie: {
    maxAge: 1800000, // 30 minutes
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

// set up sessions in express.
app.use(session(sess));

// register handlebars helper functions
const hbs = create({ helpers });

// register a handlebars view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

// Use the api routes
app.use(controller);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App is listening...");
  });
});
