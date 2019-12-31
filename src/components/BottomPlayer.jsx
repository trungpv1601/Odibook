import React, { Component } from "react";
import { Progressbar, Row, Col } from "framework7-react";
import { PauseButton } from "../components/Button";

const styles = {
  bottomPlayer: {
    width: "100%"
  }
};

class BottomPlayer extends Component {
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
            <PauseButton />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BottomPlayer;
