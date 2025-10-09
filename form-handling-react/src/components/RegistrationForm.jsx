import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ using setErrors for validation feedback

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // ✅ Username validation
    if (!username) {
      newErrors.username = "Username is required.";
    }

    // ✅ Email validation
    if (!email) {
      newErrors.email = "Email is required.";
    }

    // ✅ Password validation
    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    // If there are errors, stop submission
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // If no errors, simulate form submission
    console.log("Form submitted:", { username, email, password });

    // Clear inputs and errors
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>User Registration</h2>

      <div style={styles.inputGroup}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        {errors.username && <p style={styles.error}>{errors.username}</p>}
      </div>

      <div style={styles.inputGroup}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}
      </div>

      <div style={styles.inputGroup}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}
      </div>

      <button type="submit" style={styles.button}>
        Register
      </button>
    </form>
  );
}

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
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "4px",
  },
  button: {
    padding: "0.5rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default RegistrationForm;