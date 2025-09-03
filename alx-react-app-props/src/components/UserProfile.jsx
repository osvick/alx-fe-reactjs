// src/UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "./components/UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
