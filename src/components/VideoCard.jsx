import { Link } from "react-router-dom";
import "../styles/videoCard.css";
function VideoCard({ video }) {

  const saveToWatchLater = () => {

    let watchLater =
      JSON.parse(localStorage.getItem("watchLater")) || [];

    const exists = watchLater.find(
      (item) => item.id === video.id
    );

    if (!exists) {

      watchLater.push(video);

      localStorage.setItem(
        "watchLater",
        JSON.stringify(watchLater)
      );

      alert("Added to Watch Later");
    }
  };

  return (
    <div className="video-card">

      <Link to={`/video/${video.id}`}>

        <img
          src={video.thumbnail}
          alt={video.title}
        />

        <h3>{video.title}</h3>

        <p>{video.channel}</p>

      </Link>

      <button
        onClick={saveToWatchLater}
      >
        Watch Later
      </button>

    </div>
  );
}

export default VideoCard;