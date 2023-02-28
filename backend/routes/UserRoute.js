import express from "express";  // Importing Express library
import { 
    getUsers,                  // Importing function to get all users from controllers
    getUserById,               // Importing function to get a user by ID from controllers
    saveUser,                  // Importing function to save a user from controllers
    updateUser,                // Importing function to update a user from controllers
    deleteUser                 // Importing function to delete a user from controllers
} from "../controllers/UserController.js"  // Importing predefined user controller functions 

const router = express.Router();  // Creating an instance of Express router
//API Endpoints
router.get('/users', getUsers);  // Defining route to get all users in JSON format to browser
router.get('/users/:id', getUserById);  // Defining route to get a user by ID
router.post('/users', saveUser);  // Defining route to save a user and add new user to database
router.patch('/users/:id', updateUser);  // Defining route to update a users fields
router.delete('/users/:id', deleteUser);  // Defining route to delete a user

export default router;  // Exporting the Express router instance
