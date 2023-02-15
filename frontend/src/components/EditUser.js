// Import necessary libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// Define the EditUser component
const EditUser = () => {
  // Define state variables using the useState hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");

  // Access the navigate and id variables from the react-router-dom library
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch user data by id on component mount using the useEffect hook
  useEffect(() => {
    getUserById();
  }, []);

  // Define an async function to fetch user data by id
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    // Update the state variables with the retrieved data
    setName(response.data.name);
    setEmail(response.data.email);
    setAge(response.data.age);
    setStatus(response.data.status);
  };

  // Define an async function to update user data on form submission
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        age,
        status,
      });
      // Navigate to the home page after the update is successful
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Return the JSX for the EditUser component
  return (
    <div className="container">
      <div>
        <form onSubmit={updateUser}>
          <div className="field">
            <label>Name</label>
            <div>
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <label>Age</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
              />
            </div>
          </div>
          <div>
            <label>Status</label>
            <div>
              <div>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div>
              <button type="submit" className="button">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the EditUser component as the default export
export default EditUser;
