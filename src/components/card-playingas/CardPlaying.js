import React from "react";
import "./CardPlaying.scss";
import { Link } from "react-router-dom";
const base_url = "https://image.tmdb.org/t/p/original/";

const CardPlaying = ({ character, poster, movie, id }) => {
  return (
    <div className="card-playing">
      <Link
        to={{
          pathname: `/detail/${id}`,
          state: {
            identification: id,
          },
        }}
      >
        <img src={`${base_url}${poster}`} className="image" alt="backdrop" />
        <div className="details-card">
          <p className="title">Playing as</p>
          <p className="description">{character}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardPlaying;
