import React, { Component } from "react";
import { Progressbar, Row, Col } from "framework7-react";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";

const styles = {
  bottomPlayer: {
    width: "100%"
  }
};

class BottomPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pause: true
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
      <div style={styles.bottomPlayer}>
        <p className="no-margin-top">
          <Progressbar progress={10}></Progressbar>
        </p>
        <Row style={{ display: "flex" }}>
          <Col width="80">
            <p
              className="no-margin"
              style={{ fontSize: "16px", color: "#171F29", fontWeight: "800" }}
            >
              Florence, Italy
            </p>
            <p
              className="no-margin"
              style={{ fontSize: "10px", color: "#ADB5BD", fontWeight: "800" }}
            >
              Chapter 1
            </p>
          </Col>
          <Col width="20">
            {this.state.pause ? (
              <PauseButton onClick={this.handleClickPause} />
            ) : (
              <PlayButton onClick={this.handleClickPlay} />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default BottomPlayer;
