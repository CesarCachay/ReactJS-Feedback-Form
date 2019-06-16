/** @jsx jsx */
import React from "react";
import { jsx, keyframes } from "@emotion/core";

import { FaSpinner } from "react-icons/fa";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function Spinner() {
  return (
    <>
      <h1>Loading ...</h1>
      <div css={{ animation: `${spin} 2000ms ease infinite` }}>
        <FaSpinner />
      </div>
    </>
  );
}

export default Spinner;
