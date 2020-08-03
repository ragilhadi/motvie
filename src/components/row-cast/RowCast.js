import React, { useState, useEffect } from "react";
import "./RowCast.scss";
import axios from "../../api/axios";
import CardPerson from "../card-person/CardPerson";

const RowCast = () => {
  const [cast, setCast] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/299534/credits?api_key=8331c0e63f02372a473a46db041c13db";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setCast(request.data.cast);
      return request;
    }
    fetchData();
  }, [url]);
  return (
    <div className="row-cast-container">
      <div className="scroll-container">
        {cast.map((data) => (
          <CardPerson
            key={data.cast_id}
            photo={data.profile_path}
            character={data.character}
            name={data.name}
          />
        ))}
      </div>
    </div>
  );
};

export default RowCast;
