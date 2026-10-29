function User({ id, name, email, username }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <div>ID: {id}</div>  
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Username: {username}</div>
    </div>
  );
}

export default User;