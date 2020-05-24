import React from "react";

const VideoDetails = (props) => {
  if (!props.video) return <div></div>;
  const videoSrc = `https://youtube.com/embed/${props.video.id.videoId}`;
  return (
    // <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
        //   height='300%'
          src={videoSrc}
          className="embed-responsive-item"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        {/* <Card.Body>
          <Card.Text>{props.video.snippet.title}</Card.Text>
        </Card.Body>
      </div> */}
    </div>
  );
};

export default VideoDetails;
