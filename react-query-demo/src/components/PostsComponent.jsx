import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

function Posts() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching, // this shows background refetching state
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // Keep cached data for 5 minutes
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>📢 Posts (React Query)</h2>

      {/* ✅ Manual Refetch Button */}
      <button onClick={() => refetch()} style={styles.button}>
        {isFetching ? "Refreshing..." : "🔄 Refetch Data"}
      </button>

      <ul style={styles.list}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={styles.item}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  button: {
    padding: "0.5rem 1rem",
    margin: "1rem 0",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    background: "#f5f5f5",
    marginBottom: "0.5rem",
    padding: "0.5rem",
    borderRadius: "4px",
  },
};

export default Posts;
