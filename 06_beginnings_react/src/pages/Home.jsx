import React, { useEffect, useState } from "react";
import axios from "axios";

import User from "../comps/User.jsx";
import { Link } from "react-router-dom";

function Home() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  
  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
        console.log("Fetched users:", data);

      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    }
    const timer = setTimeout(() => {
      fetchUsers();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  // console.log("Users state changed:", users);
  // }, [users]);
  
  return (
    <div>
      <h1>Home Page</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {users.map((user) => (
            <Link to={`/user/${user.id}`} key={user.id}>
              <User
                id={user.id}
                name={user.name}
                email={user.email}
                username={user.username} />
            </Link>
            // <div key={user.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            //   <div>Name: {user.name}</div>
            //   <div>Email: {user.email}</div>
            //   <div>Username: {user.username}</div>
            // </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;