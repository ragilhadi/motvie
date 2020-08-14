import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./views/home/Homepage";
import DetailMovieTv from "./views/details-movie-tv/DetailMovieTv";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import DetailPerson from "./views/detail-person/DetailPerson";
import "./app.css";
import ScrollToTop from "./components/helper/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/detail/:id" component={DetailMovieTv} />
          <Route path="/person/:id" component={DetailPerson} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
