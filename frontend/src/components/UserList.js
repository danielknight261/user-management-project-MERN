import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  // Set up state for users and loading
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users from server when component mounts
  useEffect(() => {
    getUsers();
  }, []);

  // Function to fetch all users from the server
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a user by ID
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      // Fetch updated list of users after delete operation
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        {/* Link to add a new user */}
        <Link to="add" className="button">
          Add New
        </Link>
        {/* Table to display list of users */}
        <table className="table">
          <thead>
            <tr className="border-container">
              <th>User</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the list of users and display them in a table */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.status}</td>
                <td>
                  {/* Link to edit a user */}
                  <Link to={`edit/${user._id}`} className="button">
                    Edit
                  </Link>
                  {/* Button to delete a user */}
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="buttonRed"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
