import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_GITHUB_BASE_URL;
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Axios instance with headers
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${TOKEN}`, // Attach token
  },
});

export async function fetchUserData(username, location, minRepos) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  query = query.trim(); // remove trailing spaces

  const url = `/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error.response?.data || error.message);
    throw error;
  }
}
