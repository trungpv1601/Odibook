import React from "react";

function PauseButton(props) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" {...props}>
      <title>{"Container"}</title>
      <g fill="none" fillRule="evenodd">
        <circle fill="#7E59CB" cx={24} cy={24} r={24} />
        <g fill="#FFF">
          <path fill="none" d="M12 12h24v24H12z" />
          <path d="M23 16v16h-6V16h6zm8 0v16h-6V16h6zm-10 2h-2v12h2V18zm8 0h-2v12h2V18z" />
        </g>
      </g>
    </svg>
  );
}

export default PauseButton;
