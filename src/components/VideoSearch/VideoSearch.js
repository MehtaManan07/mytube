import React, { Component } from "react";
import youtube from "../../apis/youtube";

import NavbarComponent from "../NavbarComponent/NavbarComponent";
import VideoList from "../VideoList/VideoList";
class VideoSearch extends Component {
  state = {
    videos: [],
  };
  onSearchSubmit = async (inputData) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        key: "AIzaSyDjhVQTvgFJUZynJJMIWPupiaHUtYxxjLM",
        q: inputData,
      },
    });
    this.setState({ videos: response.data.items });
    console.log("response.data.items", response.data.items);
  };
  render() {
    return (
      <div>
        <NavbarComponent onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default VideoSearch;
