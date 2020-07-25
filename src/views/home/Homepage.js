import React from "react";
import Row from "../../components/row/Row";
import Selection from "../../components/selection/Selection";
import request from "../../api/request";
import "./Homepage.scss";
import background from "../../assets/home.png";
import TextSection from "../../components/text-section/TextSection";
import CardLanscape from "../../components/card-landscape/CardLanscape";

const Homepage = () => {
  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center center",
        }}
        className="backdrop-home"
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
          title="Trending Movies & TV Shows"
          subtitle="Discover your favorite category of section"
        />
        <Row type="Netlix" genre="Originals" url={request.fetchNetflixOri} />
        <TextSection
          title="Trending Movies & TV Shows"
          subtitle="Discover your favorite category of section"
        />
        <Row type="Discover" genre="Trending" url={request.fetchTrending} />
        <TextSection
          title="Trending Movies & TV Shows"
          subtitle="Discover your favorite category of section"
        />
        <Selection />
        <TextSection
          title="Trending Movies & TV Shows"
          subtitle="Discover your favorite category of section"
        />
      </div>
    </>
  );
};

export default Homepage;
