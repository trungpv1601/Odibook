import React, { Component } from "react";
import { Block, Range } from "framework7-react";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import ForwardButton from "./ForwardButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import RewindButton from "./RewindButton";
import ReactPlayer from "react-player";

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      played: 0
    };

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleSeekChange = this.handleSeekChange.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
  }

  handlePlayPause() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handleSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  handleProgress(state) {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  render() {
    const { playing, played } = this.state;

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
            justifyContent: "space-between"
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
        {/* <Range
          min={0}
          max={1}
          step="any"
          value={played}
          // onMouseDown={this.handleSeekMouseDown}
          // onChange={this.handleSeekChange}
          // onMouseUp={this.handleSeekMouseUp}
        ></Range> */}
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          // onMouseDown={this.handleSeekMouseDown}
          // onChange={this.handleSeekChange}
          // onMouseUp={this.handleSeekMouseUp}
        />
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
          {playing ? (
            <PauseButton onClick={this.handlePlayPause} />
          ) : (
            <PlayButton onClick={this.handlePlayPause} />
          )}
          <ForwardButton />
          <NextButton />
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0VC6euBtKkk"
          // hidden
          playing={playing}
          onProgress={this.handleProgress}
        />
      </Block>
    );
  }
}
