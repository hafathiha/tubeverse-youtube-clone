function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search videos..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />
  );
}

export default SearchBar;