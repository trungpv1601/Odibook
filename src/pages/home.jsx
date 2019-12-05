import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from "framework7-react";
import { BackIcon } from "../components/Icons";

export default () => (
  <Page name="home" noNavbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    {/* Page content */}
    <Block
      className="no-padding"
      style={{
        height: "25%"
      }}
    >
      <Block className="no-margin">
        <Link popupClose>
          <BackIcon />
        </Link>
      </Block>
      <Block
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
        className="no-margin-top"
      >
        <p
          className="no-margin-bottom"
          style={{
            fontSize: "24px",
            color: "#344252",
            fontWeight: "500"
          }}
        >
          Your Daily
        </p>
        <p
          className="no-margin-top"
          style={{
            fontSize: "24px",
            color: "#344252",
            fontWeight: "800"
          }}
        >
          Recommendation
        </p>
      </Block>
    </Block>
    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#login-popup">
            Login
          </Button>
        </Col>
        <Col width="50">
          <Button fill raised popupOpen="#register-popup">
            Register
          </Button>
        </Col>
      </Row>
    </Block>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#notification-popup">
            Notification
          </Button>
        </Col>
        <Col width="50">
          <Button fill raised popupOpen="#register-popup">
            Register
          </Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">
            Left Panel
          </Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">
            Right Panel
          </Button>
        </Col>
      </Row>
    </Block>

    <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
  </Page>
);
