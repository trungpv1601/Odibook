import React, { Component } from "react";
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  NavLeft,
  NavTitle,
  Link,
  Range
} from "framework7-react";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import ForwardButton from "./ForwardButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import RewindButton from "./RewindButton";

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pause: false
    };

    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleClickPause = this.handleClickPause.bind(this);
  }

  handleClickPlay() {
    this.setState({
      pause: true
    });
  }

  handleClickPause() {
    this.setState({
      pause: false
    });
  }

  render() {
    return (
      <Block
        className="no-margin"
        style={{
          backgroundColor: "#fff",
          ...this.props.style
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "10px"
          }}
        >
          <span
            style={{ color: "#9375D0", fontSize: "10px", fontWeight: "800" }}
          >
            00:11
          </span>
          <span
            style={{ color: "#464C5B", fontSize: "10px", fontWeight: "800" }}
          >
            06:11
          </span>
        </div>
        <Range min={0} max={100} step={1} value={10} label></Range>
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <PreviousButton />
          <RewindButton />
          {this.state.pause ? (
            <PauseButton onClick={this.handleClickPause} />
          ) : (
            <PlayButton onClick={this.handleClickPlay} />
          )}
          <ForwardButton />
          <NextButton />
        </div>
      </Block>
    );
  }
}
