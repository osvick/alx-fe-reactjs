export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search GitHub user..."
      onKeyDown={(e) => e.key === 'Enter' && onSearch(e.target.value)}
    />
  );
}
