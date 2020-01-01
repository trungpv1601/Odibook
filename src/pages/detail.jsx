import React from "react";
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  NavLeft,
  NavTitle,
  Link
} from "framework7-react";
import ReactPlayer from "react-player";
import { BackIcon } from "../components/Icons";
import PageBG from "../assets/svg/background/11.svg";
import BookCover1 from "../assets/svg/book-cover/huge/1.svg";
import Player from "../components/Player";

export default () => (
  <Page
    style={{
      height: "100%",
      background: `url(${PageBG})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "right",
      backgroundPositionY: "10%",
      backgroundColor: "var(--f7-theme-color)",
      backgroundSize: "cover"
    }}
  >
    <Navbar className="nav-bg-custom">
      <NavLeft>
        <Link back>
          <BackIcon />
        </Link>
      </NavLeft>
    </Navbar>
    <Block
      className="no-padding no-margin"
      style={{
        height: "75%"
      }}
    >
      <Block
        className="no-margin"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "30px",
          height: "70%"
        }}
      >
        <img width="60%" src={BookCover1} />
      </Block>
      <Block
        className="no-margin"
        style={{
          backgroundColor: "#fff",
          borderRadius: "40px 40px 0 0",
          paddingTop: "40px",
          paddingBottom: "var(--f7-block-margin-vertical)",
          zIndex: -1,
          textAlign: "center",
          height: "31%"
        }}
      >
        <p
          className="no-margin"
          style={{
            fontWeight: "800",
            color: "#344252",
            fontSize: "24px"
          }}
        >
          Florence, Italy
        </p>
        <p
          className="no-margin"
          style={{
            fontWeight: "500",
            color: "#9AA7B8",
            fontSize: "14px"
          }}
        >
          Chapter 1
        </p>
      </Block>
    </Block>
    <Player
      style={{
        height: "25%"
      }}
    />
  </Page>
);
