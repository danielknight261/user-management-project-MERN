import React, { useState } from "react";  // Importing React and useState from the react library
import axios from "axios";  // Importing axios library for HTTP requests
import { useNavigate } from "react-router-dom"; // Importing useNavigate from the react-router-dom library

const AddUser = () => {
  const [name, setName] = useState("");   // Setting up the state for user name
  const [email, setEmail] = useState(""); // Setting up the state for user email
  const [age, setAge] = useState("");     // Setting up the state for user age
  const [status, setStatus] = useState("Active"); // Setting up the state for user status and setting the default value to "Active"
  const navigate = useNavigate();          // Using useNavigate hook from react-router-dom library to navigate to different routes

  const saveUser = async (e) => {   // Define an asynchronous function to handle the form submission
    e.preventDefault();            // Prevent the default form submission behavior
    try {                          // Use try-catch block to catch any errors while sending HTTP request
      await axios.post("http://localhost:5000/users", {  // Send a POST request to the server API with the user data
        name,
        email,
        age,
        status,
      });
      navigate("/");  // After successful user creation, navigate back to the home page
    } catch (error) {
      console.log(error); // Log any errors while creating the user
    }
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={saveUser}>
          <div>
            <label>Name</label>
            <div>
              <input
              className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}  // Update the name state when the input value changes
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input
              className="input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update the email state when the input value changes
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <label>Age</label>
            <div>
              <input
              className="input"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}   // Update the age state when the input value changes
                placeholder="Age"
              />
            </div>
          </div>
          <div>
            <label>Status</label>
            <div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)} 
                 // Update the status state when the select value changes
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div>
            <button type="submit" className="button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;  // Export the AddUser component
