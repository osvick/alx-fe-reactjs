import React, { useState } from "react";
import Posts from "./components/PostsComponent";

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>React Query Caching Demo 🚀</h1>
      <button onClick={() => setShowPosts(!showPosts)} style={styles.button}>
        {showPosts ? "Go to Home" : "View Posts"}
      </button>

      {showPosts ? (
        <Posts />
      ) : (
        <p>You're on the Home screen. Navigate back to see cached posts.</p>
      )}
    </div>
  );
}

const styles = {
  button: {
    padding: "0.5rem 1rem",
    marginBottom: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default App;
