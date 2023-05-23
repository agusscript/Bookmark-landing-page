/* eslint-disable react/prop-types */
import React from "react";

export function validateEmail() {
  const $contactInput = document.querySelector(".contact-input");
  const $errorText = document.querySelector(".error-text");
  const $contactModal = document.querySelector(".contact-modal");

  if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test($contactInput.value)) {
    $contactInput.classList.remove("error");
    $errorText.classList.add("hidden");
    $contactModal.classList.remove("hidden");
  } else {
    $contactInput.classList.add("error");
    $errorText.classList.remove("hidden");
  }

  event.preventDefault();
}

export function reloadPage() {
  location.reload();
}

function Button({ className, btnText, handle }) {
  return (
    <button className={className} onClick={handle}>
      {btnText}
    </button>
  );
}

export default Button;