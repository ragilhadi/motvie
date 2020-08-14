import React from "react";
import "./CardPerson.scss";
import { Link } from "react-router-dom";

const CardPerson = ({ photo, name, character, id }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  function trimString(string, n) {
    if (string.length > n) {
      return string.substring(0, n) + "...";
    } else {
      return string.substring(0, n);
    }
  }
  return (
    <Link
      to={{
        pathname: `/person/${id}`,
        state: {
          identification: id,
        },
      }}
    >
      <div
        className="card-person"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${photo})`,
          backgroundPosition: "iherit",
        }}
      >
        <div className="details">
          <p className="name-cast">{trimString(name, 20)}</p>
          <p className="name-real">{trimString(character, 20)}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardPerson;
