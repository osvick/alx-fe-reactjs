import React from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { postId } = useParams();
  return (
    <div>
      <h2>Viewing Post ID: {postId}</h2>
      <p>(You could fetch post #{postId} here)</p>
    </div>
  );
}
