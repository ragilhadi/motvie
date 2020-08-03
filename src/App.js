import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./views/home/Homepage";
import DetailMovieTv from "./views/details-movie-tv/DetailMovieTv";
import { Route, Switch, HashRouter } from "react-router-dom";
import DetailPerson from "./views/detail-person/DetailPerson";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/detail" component={DetailMovieTv} />
          <Route path="/person" component={DetailPerson} />
        </Switch>
        <Footer />
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
