/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";

function Card({ image, browser, version }) {
  return (
    <div className="card-extension">
      <img src={image} alt={`${browser} icon`} />
      <h3>Add to {browser}</h3>
      <p>Minimum version {version}</p>
      <hr />
      <Button className="extension-btn" btnText="Add & Install Extension" />
    </div>
  );
}

export default Card;