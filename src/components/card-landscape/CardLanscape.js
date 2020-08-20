import React from "react";
import "./CardLanscape.scss";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const CardLanscape = ({ photo, name, overview, id }) => {
  function trimString(string, n) {
    return string.substring(0, n) + "...";
  }
  return (
    <div className="card-lanscape">
      <Link
        to={{
          pathname: `/detail/${id}`,
          state: {
            identification: id,
          },
        }}
      >
        <img src={`${base_url}${photo}`} className="image" alt="backdrop" />
        <div className="details-card">
          <p className="title">{name}</p>
          <p className="description">{trimString(String(overview), 80)}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardLanscape;
