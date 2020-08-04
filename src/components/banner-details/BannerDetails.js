import React, { useState, useEffect } from "react";
import "./BannerDetails.scss";
import axios from "../../api/axios";
import { MdPlayArrow } from "react-icons/md";

const base_url = "https://image.tmdb.org/t/p/original/";

const BannerDetails = ({ id }) => {
  const [movie, setmovie] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/363088?api_key=8331c0e63f02372a473a46db041c13db&language=en-US";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setmovie(request.data);
      return request;
    }
    fetchData();
  }, [url]);

  function trimString(s, n) {
    return s.substring(0, n);
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        backgroundPosition: "iherit",
      }}
    >
      <div className="flexbox">
        <div className="banner-details">
          <h1 className="title">
            {movie.title}{" "}
            <span className="year">
              {trimString(String(movie.release_date), 4)}
            </span>
          </h1>
          <div className="genre-duration">
            <div className="genre-duration-detail">
              <div className="little-circle"></div>
              <p className="genre-duration-detail__text">{`${movie.genres}`}</p>
            </div>
            <div className="genre-duration-detail">
              <div className="little-circle"></div>
              <p className="genre-duration-detail__text">2h 4m</p>
            </div>
          </div>
          <div className="rating-trailer">
            <div className="rating-trailer-detail">
              <div className="rounded-icon">
                <p>{movie.vote_average}</p>
              </div>
              <p className="rating-trailer-detail__text">Score</p>
            </div>
            <div className="rating-trailer-detail">
              <div className="rounded-icon">
                <MdPlayArrow className="play-icon" />
              </div>
              <p className="rating-trailer-detail__text">Play Trailer</p>
            </div>
          </div>
          <p className="description">{movie.overview}</p>
        </div>
        <div className="banner-poster">
          <img
            src={`${base_url}${movie.poster_path}`}
            alt="movie poster"
            className="poster"
          />
        </div>
      </div>
      <div className="fadebackground" />
      <div className="linierGradient" />
    </div>
  );
};

export default BannerDetails;
