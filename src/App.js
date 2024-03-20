import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import UserCard from "./moviecard";

const API_URL = "https://reqres.in/api/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchUsers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data.data);
  };

  useEffect(() => {
    searchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Users Information</h1>
      <div className="search">
        <input
          placeholder="Search for users"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={searchUsers} />
      </div>
      {filteredUsers.length > 0 ? (
        <div className="container">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No user found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
