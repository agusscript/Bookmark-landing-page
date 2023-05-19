/* eslint-disable react/prop-types */
import React from "react";

function Button({ className, btnText }) {
  return (
    <button className={className}>
      {btnText}
    </button>
  );
}

export default Button;