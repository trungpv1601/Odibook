import React from "react";

function PlayButton(props) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" {...props}>
      <title>{"comppnent/audiobook-player/pause-button/mini"}</title>
      <defs>
        <filter
          x="-14.9%"
          y="-75%"
          width="129.9%"
          height="216.7%"
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
          d="M0 0h375v72c0 13.255-10.745 24-24 24H24C10.745 96 0 85.255 0 72V0z"
          id="prefix__b"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use
          filter="url(#prefix__a)"
          xlinkHref="#prefix__b"
          fill="#000"
          transform="translate(-303 -24)"
        />
        <path
          d="M-303-24H72v72c0 13.255-10.745 24-24 24h-327c-13.255 0-24-10.745-24-24v-72z"
          fill="#FFF"
        />
        <g>
          <circle fill="#7E59CB" cx={24} cy={24} r={24} />
          <g fill="#FFF">
            <path fill="none" d="M12 12h24v24H12z" />
            <path d="M21 19.446v9.108L28.969 24 21 19.446zM19 16l14 8-14 8V16z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PlayButton;
