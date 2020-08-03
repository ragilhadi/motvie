import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import CardLanscape from "../card-landscape/CardLanscape";
import "./RowRecommended.scss";

const RowRecommended = () => {
  const [recommendation, setRecommendation] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/299534/recommendations?api_key=8331c0e63f02372a473a46db041c13db&language=en-US&page=1";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setRecommendation(request.data.results);
      return request;
    }
    fetchData();
  }, [url]);
  return (
    <div className="row-recommended-container">
      <div className="scroll-container">
        {recommendation.map((data) => (
          <CardLanscape
            key={data.cast_id}
            photo={data.backdrop_path}
            overview={data.overview}
            name={data.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default RowRecommended;
