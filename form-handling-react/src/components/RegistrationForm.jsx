import React, { useState } from "react";

function RegistrationForm() {
  // Form state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");

    // Simulate form submission (mock API)
    console.log("Form submitted:", { username, email, password });

    // Clear form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>User Registration</h2>

      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.inputGroup}>
        <label>Username:</label>
        <input
          type="text"
          value={username}                // ✅ using value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Email:</label>
        <input
          type="email"
          value={email}                   // ✅ using value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Password:</label>
        <input
          type="password"
          value={password}               // ✅ using value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" style={styles.button}>
        Register
      </button>
    </form>
  );
}

// Simple inline styles (optional)
const styles = {
  form: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  inputGroup: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    padding: "0.5rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "1rem",
  },
};

export default RegistrationForm;