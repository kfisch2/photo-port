import React from "react";

export default function Modal({ currentPhoto }) {
  const { name, category, description, index } = currentPhoto;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/small/${category}/${index}.jpg`).default}
          alt={name}
          className="img-thumbnail mx-1"
          key={name}
        />
        <p>{description}</p>
        <button type="button">Close this modal</button>
      </div>
    </div>
  );
}
