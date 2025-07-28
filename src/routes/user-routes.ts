import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";

const userRoutes = Router();

//handle incoming request on controllers 
userRoutes.get("/",getAllUsers); // GET /api/v1/users

export default userRoutes;