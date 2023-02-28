import  User  from "../models/UserModel.js";

// GET all users
export const getUsers = async (req, res) => {
    try {
      // Retrieve all users from the database
      const allUsers = await User.find();  //find method blank as we want all elements from the array
      // Return a JSON response containing all users with a 200 status code
      res.status(200).json(allUsers);
    } catch (error) {
      // If there is an error, log it to the console and return a 500 status code with an error message
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// GET single user by ID 
export const getUserById = async (req, res) => {
    try {
      // Retrieve user from the database by ID
      const requestedUser = await User.findById(req.params.id);  //findById method
      // If the user is not found, return a 404 status code with an error message
      if (!requestedUser)  { //if not
        return res.status(404).json({ error: 'User not found' });
      }
      // Return a JSON response containing the requested user with a 200 status code
      res.status(200).json(requestedUser);
    } catch (error) {
      // If there is an error, log it to the console and return a 500 status code with an error message
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// Save a new user POST Request function
export const saveUser = async (req, res) => {
    // Create a new user object add doc to db
    const newUser = new User(req.body);
    try {
      // Save the new user to the database
      const insertedUser = await newUser.save();
      // Return a JSON response containing the newly inserted user
      res.status(200).json(insertedUser);
    } catch (error) {
      // If there is a validation error, returns 400 status code with an error message
      res.status(400).json({ error: error.message});
      }
    }


// Update a user by ID PATCH function
export const updateUser = async (req, res) => {
    try {
      // Update the user in the database with the given ID and request body
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      // If the user is not found, return a 404 status code with an error message
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Return a JSON response containing the updated user with a 200 status code
      res.status(200).json(updatedUser);
    } catch (error) {
      // If there is an error, log it to the console and return a 500 status code with an error message
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// DELETE  a user by ID function
export const deleteUser = async (req, res) => {
    try {
        // Delete the user in the database with the given ID
        const deleteUser = await User.deleteOne({_id:req.params.id}); //not just id in mongo its _id which is property name
        // Return a JSON response with the deleted user and a 200 status code
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


//improvements: better error handling
