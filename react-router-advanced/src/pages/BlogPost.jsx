import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // grabs the ":id" from the URL

  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This is the content of the blog post with ID: {id}.</p>
      {/* You could fetch actual blog data here using useEffect or React Query */}
    </div>
  );
}
