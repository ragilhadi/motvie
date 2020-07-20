import React from "react";
import "./CardMovieTV.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const CardMovieTV = ({ image, name, vote }) => {
  return (
    <div className="card-movieTV">
      {/* <div className="rating">
        <p>{vote}</p>
      </div> */}
      <div className="details"></div>
      <img src={`${base_url}${image}`} alt={name} className="poster" />
    </div>
  );
};

export default CardMovieTV;
