import React from "react";
import Logo from "../../assets/moviedb.jpg";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
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
          <div className="socmed">
            <div className="media">
              <MdEmail className="icon" />
              <a href="https://github.com/ragilhadi" target="blank">
                Email
              </a>
            </div>
            <div className="media">
              <FaTwitter className="icon" />
              <a href="https://twitter.com/ragilhadi_" target="blank">
                Twitter
              </a>
            </div>
            <div className="media">
              <FaLinkedin className="icon" />
              <a
                href="https://www.linkedin.com/in/ragil-hadi-prasetyo/"
                target="blank"
              >
                Linkedin
              </a>
            </div>
            <div className="media">
              <FaGithub className="icon" />
              <a href="https://github.com/ragilhadi" target="blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="one">Design & Develop by Ragil Prasetyo</p>
        <p className="two">Created during Quarantine 2020</p>
      </div>
    </>
  );
};

export default Footer;
