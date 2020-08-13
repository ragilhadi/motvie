import React from "react";
import "./CardMovieTV.scss";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const CardMovieTV = ({ image, name, id }) => {
  return (
    <div className="card-movieTV">
      <Link
        to={{
          pathname: `/detail/${id}`,
          state: {
            identification: id,
          },
        }}
      >
        <img src={`${base_url}${image}`} alt={name} className="poster" />
      </Link>
    </div>
  );
};

export default CardMovieTV;
