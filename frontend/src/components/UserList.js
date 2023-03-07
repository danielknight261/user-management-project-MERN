import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (idToDelete) => {
    setLoading(true);
    try {
      let response;
      if (idToDelete) {
        await axios.delete(`http://localhost:5000/users/${idToDelete}`);
        setUsers(users.filter((user) => user._id !== idToDelete));
      } else {
        response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div>
        <Link to="add" className="button">
          Add New
        </Link>
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
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.status}</td>
                <td>
                  <Link to={`edit/${user._id}`} className="button">
                    Edit
                  </Link>
                  <button
                    onClick={() => getUsers(user._id)}
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
