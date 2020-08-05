import React from "react";
import Row from "../../components/row/Row";
import Selection from "../../components/selection/Selection";
import request from "../../api/request";
import "./Homepage.scss";
import background from "../../assets/home.png";
import TextSection from "../../components/text-section/TextSection";

const Homepage = () => {
  return (
    <>
      <div
        className="backdrop-home"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="header">
          <h1>
            Let's Discover <br />
            Million <span className="important">Movies</span> and{" "}
            <span className="important">TV Shows</span> <br />
            Right Here.
          </h1>
        </div>
        <div className="fadebackground" />
      </div>
      <div>
        <TextSection
          title="Netflix Original"
          subtitle="Discover your favorite category of section"
        />
        <Row url={request.fetchNetflixOri} />
        <TextSection
          title="Trending Movies & TV Shows"
          subtitle="Discover your favorite category of section"
        />
        <Row url={request.fetchTrending} />
        <TextSection
          title="Trending Movies & TV Shows"
          subtitle="Discover your favorite category of section"
        />
        <Selection />
        <TextSection
          title="Movies Now Playing"
          subtitle="Discover your favorite category of section"
        />
        <Row url={request.fetchMoviePlaying} />
        <TextSection
          title="Movies Upcoming"
          subtitle="Discover your favorite category of section"
        />
        <Row url={request.fetchMovieUpcoming} />
      </div>
    </>
  );
};

export default Homepage;
