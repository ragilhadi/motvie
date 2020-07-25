import React from "react";
import "./CardLanscape.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const CardLanscape = ({ photo, name, overview }) => {
  function trimString(string, n) {
    return string.substring(0, n) + "...";
  }
  return (
    <div className="card-lanscape">
      <img src={`${base_url}${photo}`} className="image" alt="backdrop" />
      <div className="details-card">
        <p className="title">{name}</p>
        <p className="description">{trimString(String(overview), 80)}</p>
      </div>
    </div>
  );
};

export default CardLanscape;
