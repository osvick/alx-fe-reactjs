import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  const { username } = useParams();

  return (
    <div>
      <h1>Profile: {username}</h1>

      <nav style={{ display: "flex", gap: 12 }}>
        <NavLink to="details">Details</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <div style={{ marginTop: 12 }}>
        <Outlet />
      </div>
    </div>
  );
}
