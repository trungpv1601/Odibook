import React from "react";
import {
  Page,
  Link,
  Block,
  Swiper,
  SwiperSlide,
  ListItem,
  List
} from "framework7-react";
import {
  MenuIcon,
  SearchIcon,
  StarIcon,
  RightArrowIcon
} from "../components/Icons";
import HomeBG from "../assets/svg/home-bg.svg";
import BookCover1 from "../assets/svg/book-cover/medium/1.svg";
import BookCover2 from "../assets/svg/book-cover/medium/2.svg";
import BookCover3 from "../assets/svg/book-cover/medium/3.svg";
import BookCoverTiny1 from "../assets/svg/book-cover/tiny/tiny-1.svg";
import BookCoverTiny2 from "../assets/svg/book-cover/tiny/tiny-2.svg";
import BookCoverTiny3 from "../assets/svg/book-cover/tiny/tiny-3.svg";

export default () => (
  <Page
    name="home"
    noNavbar
    style={{
      height: "100%",
      background: `url(${HomeBG})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "right",
      backgroundPositionY: "10%",
      backgroundColor: "#E9EEF4",
      backgroundSize: "cover"
    }}
  >
    {/* Page content */}
    <Block
      className="no-padding"
      style={{
        height: "25%"
      }}
    >
      <Block
        className="no-margin"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link panelOpen="left">
          <MenuIcon />
        </Link>
        <Link>
          <SearchIcon />
        </Link>
      </Block>
      <Block
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
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
      <Block className="no-margin">
        <Swiper params={{ speed: 500, slidesPerView: 1.3, spaceBetween: 10 }}>
          <SwiperSlide>
            <Block
              className="no-margin"
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                paddingTop: "var(--f7-block-margin-vertical)",
                paddingBottom: "var(--f7-block-margin-vertical)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={BookCover1} />
              </div>
              <p
                className="no-margin-bottom"
                style={{
                  fontWeight: "800",
                  color: "#171F29",
                  fontSize: "18px"
                }}
              >
                Nebula Grieving
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    fontWeight: "500",
                    color: "#9AA7B8",
                    fontSize: "12px"
                  }}
                >
                  Yara Barros
                </span>
                <span
                  style={{
                    display: "flex",
                    fontWeight: "800",
                    color: "#FFB319",
                    fontSize: "12px"
                  }}
                >
                  <StarIcon />
                  <span style={{ marginLeft: "5px" }}>3.2</span>
                </span>
              </div>
            </Block>
          </SwiperSlide>
          <SwiperSlide>
            <Block
              className="no-margin"
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                paddingTop: "var(--f7-block-margin-vertical)",
                paddingBottom: "var(--f7-block-margin-vertical)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={BookCover2} />
              </div>
              <p
                className="no-margin-bottom"
                style={{
                  fontWeight: "800",
                  color: "#171F29",
                  fontSize: "18px"
                }}
              >
                Nebula Grieving
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    fontWeight: "500",
                    color: "#9AA7B8",
                    fontSize: "12px"
                  }}
                >
                  Yara Barros
                </span>
                <span
                  style={{
                    display: "flex",
                    fontWeight: "800",
                    color: "#FFB319",
                    fontSize: "12px"
                  }}
                >
                  <StarIcon />
                  <span style={{ marginLeft: "5px" }}>3.2</span>
                </span>
              </div>
            </Block>
          </SwiperSlide>
          <SwiperSlide>
            <Block
              className="no-margin"
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                paddingTop: "var(--f7-block-margin-vertical)",
                paddingBottom: "var(--f7-block-margin-vertical)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={BookCover3} />
              </div>
              <p
                className="no-margin-bottom"
                style={{
                  fontWeight: "800",
                  color: "#171F29",
                  fontSize: "18px"
                }}
              >
                Nebula Grieving
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    fontWeight: "500",
                    color: "#9AA7B8",
                    fontSize: "12px"
                  }}
                >
                  Yara Barros
                </span>
                <span
                  style={{
                    display: "flex",
                    fontWeight: "800",
                    color: "#FFB319",
                    fontSize: "12px"
                  }}
                >
                  <StarIcon />
                  <span style={{ marginLeft: "5px" }}>3.2</span>
                </span>
              </div>
            </Block>
          </SwiperSlide>
        </Swiper>
      </Block>
      <Block className="no-margin">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <p style={{ color: "#344252", fontWeight: "500", fontSize: "24px" }}>
            You might also like
          </p>
          <RightArrowIcon />
        </div>
      </Block>
      <List mediaList noHairlines noChevron className="no-margin">
        <ListItem
          link="#"
          title="Fierce Like a Firestorm"
          subtitle="Thakurjeet Bharwana"
          text={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "800",
                color: "#FFB319",
                fontSize: "12px"
              }}
            >
              <StarIcon />
              <span style={{ marginLeft: "5px" }}>3.2</span>
            </span>
          }
        >
          <img slot="media" src={BookCoverTiny1} width="64" />
        </ListItem>
        <ListItem
          link="#"
          title="Union Of Silver"
          subtitle="Hugo Saavedra"
          text={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "800",
                color: "#FFB319",
                fontSize: "12px"
              }}
            >
              <StarIcon />
              <span style={{ marginLeft: "5px" }}>3.2</span>
            </span>
          }
        >
          <img slot="media" src={BookCoverTiny2} width="64" />
        </ListItem>
        <ListItem
          link="#"
          title="Deep Dive"
          subtitle="Mathijn Agter"
          text={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "800",
                color: "#FFB319",
                fontSize: "12px"
              }}
            >
              <StarIcon />
              <span style={{ marginLeft: "5px" }}>3.2</span>
            </span>
          }
        >
          <img slot="media" src={BookCoverTiny3} width="64" />
        </ListItem>
      </List>
    </Block>
  </Page>
);
