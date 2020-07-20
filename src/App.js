import React from "react";
import Footer from "./components/footer/Footer";
import CardPerson from "./components/card-person/CardPerson";
import BannerDetails from "./components/banner-details/BannerDetails";
import CardMovieTV from "./components/card-movie-tv/CardMovieTV";
import HighlightHome from "./components/highlight-home/HighlightHome";
import Row from "./components/row/Row";
import request from "./api/request";

function App() {
  return (
    <div className="App">
      <HighlightHome />
      <Row type="Netlix" genre="Originals" url={request.fetchNetflixOri} />
      <Row type="Discover" genre="Trending" url={request.fetchTrending} />
      <Footer />
    </div>
  );
}

export default App;
