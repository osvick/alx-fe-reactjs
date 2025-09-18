import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/githubService';

export default function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await fetchGitHubUser(username);
    setUser(data);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && <UserCard user={user} />}
    </div>
  );
}
