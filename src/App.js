import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./views/home/Homepage";
import DetailMovieTv from "./views/details-movie-tv/DetailMovieTv";
import DetailPerson from "./views/detail-person/DetailPerson";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Homepage /> */}
      {/* <DetailMovieTv /> */}
      <DetailPerson />
      <Footer />
    </div>
  );
}

export default App;
