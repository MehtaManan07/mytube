import React from "react";
import { Media } from "react-bootstrap";
const VideoItems = (props) => {
  return (
    <Media as="li">
      <img
        width='25%'
        className="mr-1"
        alt={props.video.snippet.title}
        src={props.video.snippet.thumbnails.medium.url}
      />
      <Media.Body>
      <h5> {props.video.snippet.title} </h5>
      {/* <p> {props.video.snippet.description} </p> */}
      <br />
      </Media.Body>
    </Media>
  );
};

export default VideoItems;
