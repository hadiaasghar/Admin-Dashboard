import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Createuser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editUserData = location.state?.user || null;
  const editIndex = location.state?.index ?? -1;

  const [user, setUser] = useState({
    name: "",
    department: "",
    experience: "",
  });

  useEffect(() => {
    if (editUserData) {
      setUser(editUserData);
    }
  }, [editUserData]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.department || !user.experience) {
      alert("Please fill all fields.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (editIndex >= 0) {
      users[editIndex] = user; 
    } else {
      users.push(user); 
    }

    localStorage.setItem("users", JSON.stringify(users));
    navigate("/users"); 
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {editUserData ? "Edit User" : "Create User"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={user.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={user.department}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={user.experience}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          {editUserData ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default Createuser;
