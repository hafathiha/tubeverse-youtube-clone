import { useParams } from "react-router-dom";
import { useState } from "react";
import videos from "../data/videos";

function VideoDetails() {

  const { id } = useParams();

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [subscribed, setSubscribed] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const video = videos.find(
    item => item.id === Number(id)
  );

  if (!video) {
    return <h2>Video not found</h2>;
  }

  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const shareVideo = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Video link copied!");
  };

  return (
    <div className="details">

      <iframe
        width="100%"
        height="500"
        src={video.videoUrl}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2>{video.title}</h2>

      <p>🎬 {video.channel}</p>
      <p>👁️ {video.views}</p>
      <p>📅 {video.date}</p>

      <div className="video-actions">

        <button
          className="action-btn"
          onClick={() => setLikes(likes + 1)}
        >
          👍 Like ({likes})
        </button>

        <button
          className="action-btn"
          onClick={() => setDislikes(dislikes + 1)}
        >
          👎 Dislike ({dislikes})
        </button>

        <button
          className="action-btn"
          onClick={shareVideo}
        >
          📤 Share
        </button>

        <button
          className="subscribe-btn"
          onClick={() =>
            setSubscribed(!subscribed)
          }
        >
          {subscribed
            ? "✅ Subscribed"
            : "🔔 Subscribe"}
        </button>

      </div>

      <div className="comments-section">

        <h3>💬 Comments</h3>

        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
        />

        <button
          className="comment-btn"
          onClick={addComment}
        >
          Post Comment
        </button>

        <div className="comments-list">

          {comments.map((item, index) => (
            <div
              key={index}
              className="comment-box"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default VideoDetails;