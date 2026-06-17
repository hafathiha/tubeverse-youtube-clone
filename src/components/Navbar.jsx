import SearchBar from "./SearchBar";

function Navbar({
  search,
  setSearch,
  darkMode,
  setDarkMode
}) {
  return (
    <nav className="navbar">

      <h1 className="logo">
        TubeVerse ✨
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <button
        className="theme-btn"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

    </nav>
  );
}

export default Navbar;