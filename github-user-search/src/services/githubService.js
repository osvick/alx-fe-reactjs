const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchGitHubUser(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${API_KEY}`
    }
  });
  return response.data;
}
