import React from "react";
import VideoItems from "./VideoItems.js/VideoItems";
import { ListGroup } from "react-bootstrap";

const VideoList = (props) => {
  const renderedVideos = props.videos.map((video, i) => {
    return (
      <VideoItems
        key={i}
        // onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });
  return (
    <ListGroup>
      <ListGroup.Item style={{marginBottom: 5}}> {renderedVideos} </ListGroup.Item>
    </ListGroup>
  );
};

export default VideoList;
