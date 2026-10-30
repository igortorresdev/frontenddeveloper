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
          <ul>
            {users.map((user) => (
              <li key={user.id}>  
                <Link to={`/users/${user.id}`}>
                  <User
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    username={user.username} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;