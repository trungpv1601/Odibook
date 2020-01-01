import React from "react";

function PlayButton(props) {
  return (
    <svg width={64} height={64} viewBox="0 0 64 64" {...props}>
      <title>{"comppnent/audiobook-player/play-button"}</title>
      <defs>
        <filter
          x="-14.9%"
          y="-40.2%"
          width="129.9%"
          height="162.6%"
          filterUnits="objectBoundingBox"
          id="prefix__a"
        >
          <feOffset dy={-16} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={16}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path
          d="M0 0h375v155c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V0z"
          id="prefix__b"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use
          filter="url(#prefix__a)"
          xlinkHref="#prefix__b"
          fill="#000"
          transform="translate(-156 -79)"
        />
        <path
          d="M-156-79h375V76c0 13.255-10.745 24-24 24h-327c-13.255 0-24-10.745-24-24V-79z"
          fill="#FFF"
        />
        <g>
          <circle fill="#7E59CB" cx={32} cy={32} r={32} />
          <g fill="#FFF">
            <path fill="none" d="M20 20h24v24H20z" />
            <path d="M29 27.446v9.108L36.969 32 29 27.446zM27 24l14 8-14 8V24z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PlayButton;
