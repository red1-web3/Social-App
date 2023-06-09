import React from "react";

function Camera() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1.1em"
      width="1.1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx={12} cy={13} r={4} />
    </svg>
  );
}

export default Camera;
