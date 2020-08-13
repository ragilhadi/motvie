import React, { useState, useEffect } from "react";
import "./Row.scss";
import CardMovieTV from "../card-movie-tv/CardMovieTV";
import { BeatLoader } from "react-spinners";
import axios from "../../api/axios";

const Row = ({ type, genre, url }) => {
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(url)
        .then((result) => setmovies(result.data.results));
      setIsLoading(false);
      // setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div className="row-container">
      <div className="scroll-container">
        {isLoading ? (
          <BeatLoader />
        ) : (
          movies.map((data) => (
            <CardMovieTV
              key={data.id}
              image={data.poster_path}
              name={data.original_title}
              id={data.id}
              vote={data.vote_average}
            />
          ))
        )}
        {/* {movies.map((data) => (
          <CardMovieTV
            key={data.id}
            image={data.poster_path}
            name={data.original_title}
            id={data.id}
            vote={data.vote_average}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Row;
