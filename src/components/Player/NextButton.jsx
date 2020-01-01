import React from "react";

function NextButton(props) {
  return (
    <svg width={13} height={16} viewBox="0 0 13 16" {...props}>
      <title>{"icon/next"}</title>
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
          transform="translate(-298 -103)"
        />
        <path
          d="M-298-103H77V52c0 13.255-10.745 24-24 24h-327c-13.255 0-24-10.745-24-24v-155z"
          fill="#FFF"
        />
        <path fill="none" d="M-6-4h24v24H-6z" />
        <path
          d="M0 0l10 8-10 8V0zm12.397 0v16h-2V0h2zM2 4.161v7.678L6.798 8 2 4.161z"
          fill="#344252"
        />
      </g>
    </svg>
  );
}

export default NextButton;
