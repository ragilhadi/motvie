import React from "react";
import Footer from "./components/footer/Footer";
import CardPerson from "./components/card-person/CardPerson";
import BannerDetails from "./components/banner-details/BannerDetails";
import CardMovieTV from "./components/card-movie-tv/CardMovieTV";
import HighlightHome from "./components/highlight-home/HighlightHome";

function App() {
  return (
    <div className="App">
      <BannerDetails />
      <CardPerson />
      <CardMovieTV />
      <HighlightHome />
      <Footer />
    </div>
  );
}

export default App;
