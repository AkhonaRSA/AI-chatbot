import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//open the application server once is already connected to the database. 
//connection and listeners 
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("connected to database and server just opened"));
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map