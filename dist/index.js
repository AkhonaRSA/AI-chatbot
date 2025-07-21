import app from "./app.js";
import { connectToDatabase } from "./controllers/connection.js";
//open the application server once is already connected to the database. 
//connection and listeners 
connectToDatabase()
    .then(() => {
    app.listen(5000, () => console.log("server running along with database successfully!"));
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map