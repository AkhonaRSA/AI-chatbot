import { Router } from "express";
import { getAllUsers, userLogIn, userSignUp } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";
const userRoutes = Router();
//handle incoming request on controllers 
userRoutes.get("/", getAllUsers); // GET /api/v1/users
userRoutes.post("/signup", validate(signupValidator), userSignUp); // GET /api/v1/users
userRoutes.post("/login", validate(loginValidator), userLogIn); // GET /api/v1/users
export default userRoutes;
//# sourceMappingURL=user-routes.js.map