import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // after login, return to previous page if available
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login (simulate)</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
