import express from "express"; 
import {config} from "dotenv";

const app = express();

config(); // Load environment variables from .env file

// Middleware to parse JSON bodies
app.use(express.json());

export default app;