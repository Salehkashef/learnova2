import { useState } from "react";
import PropTypes from "prop-types";

import "./CourseVideo.css";

const CourseVideo = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState(null);

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying((prevState) => !prevState);
    }
  };

  const handleVideoLoaded = (ref) => {
    setVideoRef(ref);
  };

  return (
    <div className="video-container">
      <video
        src={`http://localhost:4000/imgs/${data}`}
        controls
        width="100%"
        height="50%"
        onClick={togglePlay}
        className="video-element"
        ref={handleVideoLoaded}
      >
        Your browser does not support the video tag.
      </video>
      <div className="button-container">
        {isPlaying ? (
          <button className="pause-button" onClick={togglePlay}></button>
        ) : (
          <button className="play-button" onClick={togglePlay}></button>
        )}
      </div>
    </div>
  );
};

CourseVideo.propTypes = {
  data: PropTypes.string.isRequired,
};

export default CourseVideo;
