import React, { useState, useEffect } from "react";
import "./Row.scss";
import CardMovieTV from "../card-movie-tv/CardMovieTV";
import axios from "../../api/axios";

const Row = ({ type, genre, url }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [url]);

  console.table(movies);
  return (
    <div className="row-container">
      <h1 className="title">
        {type} - <span>{genre}</span>
      </h1>
      <div className="scroll-container">
        {movies.map((data) => (
          <CardMovieTV
            key={data.id}
            image={data.poster_path}
            name={data.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;