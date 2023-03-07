import React, { useState, useEffect } from "react";  // 
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  // Set up state for users and loading
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users from server when component mounts 
  // useEffect fires a function when component is rendered, we pass empty array so it only renders once
  useEffect(() => {   // In this case Getting USERS from backend mongodb database 
    getUsers();
  }, []);

  // asynchronous function getUsers that fetches data from a server and updates the state of the component with the fetched data.
  const getUsers = async () => {
    setLoading(true);    // setLoading(true) sets the component's loading state to true,
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);   // finally block sets the loading state back to false, which will allow the component to render normally.
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

//   another way 
//   // Function to fetch users from server and optionally delete a user by ID
// const fetchUsers = async (idToDelete) => {
//   setLoading(true);    // setLoading(true) sets the component's loading state to true,
//   try {
//     if (idToDelete) {
//       await axios.delete(`http://localhost:5000/users/${idToDelete}`);
//     }
//     const response = await axios.get("http://localhost:5000/users");
//     setUsers(response.data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);   // finally block sets the loading state back to false, which will allow the component to render normally.
//   }
// };

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
            {users.map((user, index) => ( // Map method is being used to map through array of users
              <tr key={user._id}>  {/* In this case, the key prop is being set to the id property of the user object. This assumes that each user object has a unique _id value */} 
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
