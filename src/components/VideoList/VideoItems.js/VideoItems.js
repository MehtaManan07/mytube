import React from "react";
import { Media } from "react-bootstrap";
const VideoItems = (props) => {
  return (
    <Media as="li">
      <img
        width="35%"
        className="mr-1"
        alt={props.video.snippet.title}
        src={props.video.snippet.thumbnails.medium.url}
      />
      <Media.Body>
      <h4> {props.video.snippet.title} </h4>
      {/* <p> {props.video.snippet.description} </p> */}
      </Media.Body>
    </Media>
  );
};

export default VideoItems;
