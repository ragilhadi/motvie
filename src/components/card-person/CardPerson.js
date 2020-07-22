import React from "react";
import "./CardPerson.scss";

const CardPerson = ({ photo, name, character }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className="card-person"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${photo})`,
        backgroundPosition: "iherit",
      }}
    >
      <div className="details">
        <p className="name-cast">{name}</p>
        <p className="name-real">{character}</p>
      </div>
    </div>
  );
};

export default CardPerson;
