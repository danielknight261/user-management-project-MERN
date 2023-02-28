import React, { useState } from "react";  // Importing React and useState from the react library
import axios from "axios";  // Importing axios library for HTTP requests
import { useNavigate } from "react-router-dom"; // Importing useNavigate from the react-router-dom library

const AddUser = () => {
  const [name, setName] = useState("");   // Setting up the state for user name //Initial value empty string
  const [email, setEmail] = useState(""); // Setting up the state for user email //Initial value empty string
  const [age, setAge] = useState("");     // Setting up the state for user age //Initial value empty string
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
      console.log(error); // Logs any errors while creating the user
    }
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={saveUser}>  {/*Linked to the saveUser function above that then post to backend and post to mongodb*/}
          <div>
            <label>Name</label>
            <div>
              <input
              className="input"
                type="text"
                value={name}   // set to value state so if changes its reflected in the input
                onChange={(e) => setName(e.target.value)}  // Update the name state when the input value changes, takes in event target which is input field
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
                value={email}  // set to value state so if changes its reflected in the input
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
                type="number" // defining the input
                value={age}   // set to value state so if changes its reflected in the input
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
                onChange={(e) => setStatus(e.target.value)}   // set to value state so if changes its reflected in the input
                 // Update the status state when the select value changes
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div>
            <button type="submit" className="button">Save</button>   {/*submit linked to form on submit above, which in turn links to saveUser function*/}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;  // Export the AddUser component
