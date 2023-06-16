/* eslint-disable react/prop-types */
import React from "react";

function Card({ image, browser, version }) {
  return (
    <div className="card-extension">
      <img src={image} alt={`${browser} icon`} />
      <h3>Add to {browser}</h3>
      <p>Minimum version {version}</p>
      <hr />
      <button className="extension-btn">Add & Install Extension</button>
    </div>
  );
}

export default Card;
