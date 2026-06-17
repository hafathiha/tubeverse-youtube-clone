import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <Link to="/" className="menu-item">
        🏠 <span>Home</span>
      </Link>

      <Link to="/watchlater" className="menu-item">
        ⏱️ <span>Watch Later</span>
      </Link>

      <div className="menu-item">
        🔥 <span>Trending</span>
      </div>

      <div className="menu-item">
        🎮 <span>Gaming</span>
      </div>

      <div className="menu-item">
        🎵 <span>Music</span>
      </div>

      <div className="menu-item">
        ⚽ <span>Sports</span>
      </div>

      <div className="menu-item">
        ❤️ <span>Favorites</span>
      </div>

    </aside>
  );
}

export default Sidebar;;