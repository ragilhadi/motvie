import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./BannerPerson.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const BannerPerson = () => {
  const [person, setperson] = useState([]);
  const url =
    "https://api.themoviedb.org/3/person/10990?api_key=8331c0e63f02372a473a46db041c13db&language=en-US";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setperson(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, [url]);
  return (
    <div className="person">
      <div className="person-container">
        <div className="poster">
          <img
            src={`${base_url}${person.profile_path}`}
            alt="profile_person"
            className="poster_image"
          />
        </div>
        <div className="details">
          <h1>{person.name}</h1>
          <div className="biography">
            <h3>Biography</h3>
            <p>{person.biography}</p>
            <div className="additional">
              <div className="detail">
                <h4>Known For</h4>
                <p>{person.known_for_department}</p>
              </div>
              <div className="detail">
                <h4>Birthday</h4>
                <p>{person.birthday}</p>
              </div>
              <div className="detail">
                <h4>Place of Birth</h4>
                <p>{person.place_of_birth}</p>
              </div>
              <div className="detail">
                <h4>Social Media</h4>
                <p>Acting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPerson;
