import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import CardPlaying from "../card-playingas/CardPlaying";

const RowPlaying = () => {
  const [playas, setPlayas] = useState([]);
  const url =
    "https://api.themoviedb.org/3/person/10990/combined_credits?api_key=8331c0e63f02372a473a46db041c13db&language=en-US";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setPlayas(request.data.cast);
      console.log(request.data.cast);
      return request;
    }
    fetchData();
  }, [url]);
  return (
    <div className="row-recommended-container">
      <div className="scroll-container">
        {playas.map((data) => (
          <CardPlaying
            key={data.cast_id}
            movie={data.original_title}
            poster={data.poster_path}
            character={data.character}
          />
        ))}
      </div>
    </div>
  );
};

export default RowPlaying;
