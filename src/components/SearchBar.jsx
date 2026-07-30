function SearchBar({ search, setSearch }) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}