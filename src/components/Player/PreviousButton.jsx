import React from "react";

function PreviousButton(props) {
  return (
    <svg width={13} height={16} viewBox="0 0 13 16" {...props}>
      <title>{"icon/previous"}</title>
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
          transform="translate(-66 -103)"
        />
        <path
          d="M-66-103h375V52c0 13.255-10.745 24-24 24H-42c-13.255 0-24-10.745-24-24v-155z"
          fill="#FFF"
        />
        <path fill="none" d="M-6-4h24v24H-6z" />
        <path
          d="M12.397 0l-10 8 10 8V0zM0 0v16h2V0H0zm10.397 4.161v7.678L5.6 8l4.798-3.839z"
          fill="#344252"
        />
      </g>
    </svg>
  );
}

export default PreviousButton;
