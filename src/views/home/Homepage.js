import React from "react";
import Row from "../../components/row/Row";
import Selection from "../../components/selection/Selection";
import request from "../../api/request";
import "./Homepage.scss";
import background from "../../assets/home.png";

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
      />
      <div>
        <Row type="Netlix" genre="Originals" url={request.fetchNetflixOri} />
        <Row type="Discover" genre="Trending" url={request.fetchTrending} />
        <Selection />
      </div>
    </>
  );
};

export default Homepage;
