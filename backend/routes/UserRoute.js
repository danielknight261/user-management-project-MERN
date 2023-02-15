import express from "express";  // Importing Express library
import { 
    getUsers,                  // Importing function to get all users
    getUserById,               // Importing function to get a user by ID
    saveUser,                  // Importing function to save a user
    updateUser,                // Importing function to update a user
    deleteUser                 // Importing function to delete a user
} from "../controllers/UserController.js"  // Importing user controller functions

const router = express.Router();  // Creating an instance of Express router

router.get('/users', getUsers);  // Defining route to get all users
router.get('/users/:id', getUserById);  // Defining route to get a user by ID
router.post('/users', saveUser);  // Defining route to save a user
router.patch('/users/:id', updateUser);  // Defining route to update a user
router.delete('/users/:id', deleteUser);  // Defining route to delete a user

export default router;  // Exporting the Express router instance
