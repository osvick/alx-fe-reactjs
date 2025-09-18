export default function UserCard({ user }) {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="80" />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank">View Profile</a>
    </div>
  );
}
