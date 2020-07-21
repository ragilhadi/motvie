import React from "react";
import Footer from "./components/footer/Footer";
import Row from "./components/row/Row";
import request from "./api/request";
import Navbar from "./components/navbar/Navbar";
import Selection from "./components/selection/Selection";

function App() {
  return (
    <div>
      <Navbar />
      <Row type="Netlix" genre="Originals" url={request.fetchNetflixOri} />
      <Row type="Discover" genre="Trending" url={request.fetchTrending} />
      <Selection />
      <Footer />
    </div>
  );
}

export default App;
