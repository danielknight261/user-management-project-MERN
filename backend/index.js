import express from "express"; // Importing Express library
import mongoose from "mongoose"; // Importing Mongoose library
import cors from "cors"; // Importing Cors library
import UserRoute from "./routes/UserRoute.js"; // Importing UserRoute

const app = express(); // Creating an instance of the Express application

// Connecting to the MongoDB database  "connect method()"
//Future ref  mongoose.connect(process.env.MONGO_UI)
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.stzluip.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, // flag tells the MongoDB client driver to use a new URL parser when connecting to the database
      useUnifiedTopology: true, //flag enables the use of the MongoDB driver's new unified topology engine
    }
  )
  .then(() => console.log("Connected to db & listening on port 5000"))
  .catch((error) => console.log(error));

const db = mongoose.connection; // Getting the default connection of Mongoose
db.on("error", (error) => console.log(error)); // Log error if any while connecting to the database
db.once("open", () => console.log("Connected to database ...")); // Log successful connection to the database

//middleware
app.use(cors()); // Using Cors middleware to allow cross-origin resource sharing http headers
app.use(express.json()); // Using the express.json() middleware to parse incoming JSON data
app.use(UserRoute); // Mounting the UserRoute on the app 1.schema, 2. controller, 3 routes, 4 index
//listen for requests
app.listen(5000, () => console.log("Listening on port 5000")); // Starting the server on port 5000 and logging a message to the console when the server starts
