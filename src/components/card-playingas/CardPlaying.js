import React from "react";
import "./CardPlaying.scss";
const base_url = "https://image.tmdb.org/t/p/original/";

const CardPlaying = ({ character, poster, movie }) => {
  return (
    <div className="card-playing">
      <img src={`${base_url}${poster}`} className="image" alt="backdrop" />
      <div className="details-card">
        <p className="title">Playing as</p>
        <p className="description">{character}</p>
      </div>
    </div>
  );
};

export default CardPlaying;
