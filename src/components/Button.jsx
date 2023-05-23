/* eslint-disable react/prop-types */
import React from "react";

export function validateEmail() {
  const $contactInput = document.querySelector(".contact-input");

  if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test($contactInput.value)) {
    $contactInput.classList.remove("error");
  } else {
    $contactInput.classList.add("error");
    document.querySelector(".error-text").classList.remove("hidden");
  }

  event.preventDefault();
}

function Button({ className, btnText, handle }) {
  return (
    <button className={className} onClick={handle}>
      {btnText}
    </button>
  );
}

export default Button;