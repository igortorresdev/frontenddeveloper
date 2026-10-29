import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(data);
        console.log("Fetched user:", data);

      } catch (error) {
        console.error("Error fetching user:", error);
        setError("Failed to load user.");
      } finally {
        setLoading(false);
      }
    }
    const timer = setTimeout(() => {
      fetchUser();
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading user...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
}

export default Users;