import  User  from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const insertuser = await user.save();
        res.status(201).json(insertuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateUser = async (req, res) => {
    try {
        const updateuser = await User.updateOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(updateuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleteuser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}