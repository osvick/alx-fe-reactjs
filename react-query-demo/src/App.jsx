import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./components/PostsComponent";

// ✅ Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // ✅ Wrap your app with QueryClientProvider and pass the client
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "1rem" }}>
        <h1>React Query Demo 🚀</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
