import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
const appRouter = Router();
//create structure of our routes system 
appRouter.use("/users", userRoutes);
appRouter.use("/chats", chatRoutes); // "/domain/api/v1/chats"
export default appRouter;
//# sourceMappingURL=index.js.map