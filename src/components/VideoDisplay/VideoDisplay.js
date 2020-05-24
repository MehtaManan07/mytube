import React, { Component } from "react";
import youtube from "../../apis/youtube";
import { Container, Row, Col } from "react-bootstrap";
import VideoDetails from "./VideoDetails/VideoDetails";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import VideoList from "../VideoList/VideoList";

class VideoDisplay extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  onTermSubmit = async (inputData) => {
      
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          key: "AIzaSyDjhVQTvgFJUZynJJMIWPupiaHUtYxxjLM",
          q: inputData,
        },
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <NavbarComponent onFormSubmit={this.onTermSubmit} />
        <Container>
          <Row>
            <Col sm={8}>
              {" "}
              <VideoDetails video={this.state.selectedVideo} />{" "}
            </Col>
            <Col sm={4}>
              {" "}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default VideoDisplay;
