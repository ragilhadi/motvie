import React from "react";
import Footer from "./components/footer/Footer";
import CardPerson from "./components/card-person/CardPerson";
import BannerDetails from "./components/banner-details/BannerDetails";
import CardMovieTV from "./components/card-movie-tv/CardMovieTV";

function App() {
  return (
    <div className="App">
      <BannerDetails />
      <CardPerson />
      <CardMovieTV />
      <Footer />
    </div>
  );
}

export default App;
