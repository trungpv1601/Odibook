import React, { Component } from "react";
import { Block, Range, Progressbar } from "framework7-react";
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
      played: 0,
      pip: false,
      controls: false,
      light: false,
      volume: 0.8,
      muted: false,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
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
    // console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  handleSeekMouseDown(e) {
    this.setState({ seeking: true });
  }

  handleSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  handleSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  handlePlay() {
    console.log("onPlay");
    this.setState({ playing: true });
  }

  handleEnablePIP() {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  }

  handleDisablePIP() {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  }

  handlePause() {
    console.log("onPause");
    this.setState({ playing: false });
  }

  handleEnded() {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  }

  handleDuration(duration) {
    console.log("onDuration", duration);
    this.setState({ duration });
  }

  format(seconds) {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = this.pad(date.getUTCSeconds());
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
  }

  pad(string) {
    return ("0" + string).slice(-2);
  }

  render() {
    const {
      playing,
      played,
      pip,
      controls,
      light,
      volume,
      muted,
      loaded,
      duration,
      playbackRate,
      loop
    } = this.state;
    console.log(duration * played, duration);
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
            {this.format(duration * played)}
          </span>
          <span
            style={{ color: "#464C5B", fontSize: "10px", fontWeight: "800" }}
          >
            {this.format(duration)}
          </span>
        </div>
        <p>
          <Progressbar progress={played * 100}></Progressbar>
        </p>
        {/* <Range
          min={0}
          max={duration}
          step={1}
          value={duration * played}
          onMouseDown={this.handleSeekMouseDown}
          onChange={this.handleSeekChange}
          onMouseUp={this.handleSeekMouseUp}
        ></Range> */}
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
          ref={player => {
            this.player = player;
          }}
          url="https://www.youtube.com/watch?v=0VC6euBtKkk"
          hidden
          playing={playing}
          onProgress={this.handleProgress}
          pip={pip}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => console.log("onReady")}
          onStart={() => console.log("onStart")}
          onPlay={this.handlePlay.bind(this)}
          onEnablePIP={this.handleEnablePIP.bind(this)}
          onDisablePIP={this.handleDisablePIP.bind(this)}
          onPause={this.handlePause.bind(this)}
          onBuffer={() => console.log("onBuffer")}
          onSeek={e => console.log("onSeek", e)}
          onEnded={this.handleEnded.bind(this)}
          onError={e => console.log("onError", e)}
          onProgress={this.handleProgress}
          onDuration={duration => this.handleDuration(duration)}
        />
      </Block>
    );
  }
}
