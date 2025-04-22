import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from "./config/connections.js";
// import { User, Post, Comment } from "./models/index.js";
import controller from "./controller/index.js";
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

// Use the api routes
app.use(controller);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App is listening...");
  });
});
