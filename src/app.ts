import express from "express"; 
import {config} from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";

//app is the powerhouse of the routes, controls our whole application 
//Sets up the app — middlewares, routes, configs,like it building the car, and servers turning keys on

const app = express();
config(); // Load environment variables from .env file

// Middleware to parse JSON bodies

app.use(express.json());
app.use(morgan("dev")); // Logging middleware for development
app.use(cookieParser(process.env.COOKIE_SECRET)); // Middleware to parse cookies

app.use("/api/v1",appRouter); // Mount the router on the /api/v1 path

export default app;