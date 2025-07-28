import { Router } from "express";
import { getAllUsers, userSignUp } from "../controllers/user-controllers.js";

const userRoutes = Router();

//handle incoming request on controllers 
userRoutes.get("/",getAllUsers); // GET /api/v1/users
userRoutes.post("/signup",userSignUp); // GET /api/v1/users
export default userRoutes;