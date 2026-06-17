import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";

function WatchLater() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const savedVideos =
      JSON.parse(localStorage.getItem("watchLater")) || [];

    setVideos(savedVideos);
  }, []);

  return (
    <div>
      <h1>Watch Later</h1>

      <div className="videos">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))
        ) : (
          <p>No videos saved yet.</p>
        )}
      </div>
    </div>
  );
}

export default WatchLater;