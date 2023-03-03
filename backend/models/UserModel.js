import mongoose from "mongoose";  // Importing Mongoose library

const User = mongoose.Schema({  // Creating a Mongoose schema for User collection , Schema in future which is standard naming convention
  name: {                       // Name property of User collection
    type: String,              // Type is String
    required: true             // Name is a required field
  },
  email: {                      // Email property of User collection
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']            // Email is a required field
  },
  age: {                        // Age property of User collection
    type: Number,              // Type is Number
    required: true,            // Age is a required field
    minimum:1,
    maximum:120            
  },
  status: {                     // Status property of User collection
    type: String,              // Type is String
    required: true             // Status is a required field
  }
});

export default mongoose.model("Users", User);  // Exporting User schema as a Mongoose model named "Users"
