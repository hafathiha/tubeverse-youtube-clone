import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

import videos from "../data/videos";

function Home() {

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("theme")) ?? true
  );

  useEffect(() => {

    localStorage.setItem(
      "theme",
      JSON.stringify(darkMode)
    );

    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }

  }, [darkMode]);

  const filteredVideos = videos.filter((video) =>
    video.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="container">

        <Sidebar />

        <div className="videos">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default Home;