import React from "react";
import "./CardMovieTV.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const CardMovieTV = ({ image, name }) => {
  return (
    <div className="card-movieTV">
      <div className="rating">
        <p>7.5</p>
      </div>
      <img src={`${base_url}${image}`} alt={name} className="poster" />
    </div>
  );
};

export default CardMovieTV;
