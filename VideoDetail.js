import React from "react";
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       <p>Enter search keyword to load...</p>
       <br></br>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="videodetails">
      <div className="image">
        <iframe src={videoSrc} allowFullScreen title="Video player" id="frame" />
      </div>
      <div className="details">
        <h4 className="title">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;