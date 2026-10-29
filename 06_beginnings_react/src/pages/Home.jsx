import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  
  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data);

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
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;