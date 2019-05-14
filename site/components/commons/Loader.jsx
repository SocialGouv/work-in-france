import React from "react";

const Loader = props => (
  <svg
    aria-label="Loading content, please wait."
    fill="#FFFFFF"
    height="15"
    viewBox="0 0 120 30"
    width="60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15">
      <animate
        attributeName="r"
        begin="0s"
        calcMode="linear"
        dur="0.8s"
        from="15"
        repeatCount="indefinite"
        to="15"
        values="15;9;15"
      />
      <animate
        attributeName="fillOpacity"
        begin="0s"
        calcMode="linear"
        dur="0.8s"
        from="1"
        repeatCount="indefinite"
        to="1"
        values="1;.5;1"
      />
    </circle>
    <circle attributeName="fillOpacity" cx="60" cy="15" from="1" r="9" to="0.3">
      <animate
        attributeName="r"
        begin="0s"
        calcMode="linear"
        dur="0.8s"
        from="9"
        repeatCount="indefinite"
        to="9"
        values="9;15;9"
      />
      <animate
        attributeName="fillOpacity"
        begin="0s"
        calcMode="linear"
        dur="0.8s"
        from="0.5"
        repeatCount="indefinite"
        to="0.5"
        values=".5;1;.5"
      />
    </circle>
    <circle cx="105" cy="15" r="15">
      <animate
        attributeName="r"
        begin="0s"
        calcMode="linear"
        dur="0.8s"
        from="15"
        repeatCount="indefinite"
        to="15"
        values="15;9;15"
      />
      <animate
        attributeName="fillOpacity"
        begin="0s"
        calcMode="linear"
        dur="0.8s"
        from="1"
        repeatCount="indefinite"
        to="1"
        values="1;.5;1"
      />
    </circle>
  </svg>
);

export default Loader;
