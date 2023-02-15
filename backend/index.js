import express from "express"; // Importing Express library
import mongoose from "mongoose"; // Importing Mongoose library
import cors from "cors"; // Importing Cors library
import UserRoute from "./routes/UserRoute.js"; // Importing UserRoute

const app = express(); // Creating an instance of the Express application

// Connecting to the MongoDB database
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.stzluip.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, // Set the useNewUrlParser flag to true
      useUnifiedTopology: true, // Set the useUnifiedTopology flag to true
    }
  )
  .then(() => console.log("Connected to database ..."))
  .catch((error) => console.log(error));

const db = mongoose.connection; // Getting the default connection of Mongoose
db.on("error", (error) => console.log(error)); // Log error if any while connecting to the database
db.once("open", () => console.log("Connected to database ...")); // Log successful connection to the database

app.use(cors()); // Using Cors middleware to allow cross-origin resource sharing
app.use(express.json()); // Using the express.json() middleware to parse incoming JSON data
app.use(UserRoute); // Mounting the UserRoute on the app

app.listen(5000, () => console.log("Server running...")); // Starting the server on port 5000 and logging a message to the console when the server starts
