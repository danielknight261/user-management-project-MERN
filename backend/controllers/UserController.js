import  User  from "../models/UserModel.js";

// Get all users
export const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
};

// Get user by ID
export const getUserById = async (req, res) => {
    try {
        const requestedUser = await User.findById(req.params.id);
        res.json(requestedUser);
    } catch (error) {
        res.status(404).json({ message: "user not found" });
    }
};

// Save a new user
export const saveUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const insertedUser = await newUser.save();
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a user by ID
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "user not found" });
    }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
