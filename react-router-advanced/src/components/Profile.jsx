import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  const { username } = useParams(); // dynamic route parameter (e.g. /profile/osinachi)

  return (
    <div>
      <h2>Welcome, {username} 👋</h2>

      {/* Navigation for nested routes */}
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ marginRight: "1rem" }}>
          Details
        </Link>
        <Link to="settings">
          Settings
        </Link>
      </nav>

      {/* Nested routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
