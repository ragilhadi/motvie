import React from "react";
import Logo from "../../assets/moviedb.jpg";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="moviedb">
        <h3>This Website Powered by</h3>
        <a href="https://developers.themoviedb.org/3" target="blank">
          <img src={Logo} alt="MovieDB" className="logo" />
        </a>
      </div>
      <div className="description">
        <h3>
          Motvie - Movies and TV Show <br /> Website Version{" "}
        </h3>
        <p>
          This website is build to user easily get information of millions of
          Movies and TV Show with simple UI to get a new experience of movie
          website. with a simple UI of information that very useful and easily
          to read.
        </p>
      </div>
      <div className="contact">
        <h3>Contact Me</h3>
        <ul>
          <li>
            <a>Email</a>
          </li>
          <li>
            <a>Twitter</a>
          </li>
          <li>
            <a>Linkedin</a>
          </li>
          <li>
            <a>Github</a>
          </li>
        </ul>
        <p>Created by Ragil Prasetyo</p>
      </div>
    </div>
  );
};

export default Footer;
