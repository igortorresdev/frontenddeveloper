import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { username } = useParams();

  return (

    <div>
      <h1>{username}'s Page</h1>
    </div>
  );
}

export default Users;