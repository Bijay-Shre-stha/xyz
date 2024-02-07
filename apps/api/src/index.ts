import express, { Express } from "express";
import dotenv from "dotenv";
import { AuthRouter } from "./routes";
import { setUser } from "./middleware";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();

const PORT = 5000;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(setUser);

// routes
app.use("/api/auth", AuthRouter);

function init() {
  console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, init);

module.exports = app;
