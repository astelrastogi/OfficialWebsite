import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Events from "./pages/Events/index";
import Resources from "./pages/Resources/index";
import Team from "./pages/Team/index";
import BDOME from "./images/Bdome.png";

const App = () => {
  const imageList = [BDOME];
  imageList.forEach((image) => {
    new Image().src = image;
  });
  const [load, setload] = useState(true);

  useEffect(async () => {
    await setTimeout(() => setload(false), 6000);
  }, []);
  return (
    <>
      <>
        <Router>
          {/*<Navbar />*/}
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Home load={load} BDOME={BDOME} />}
            />
            <Route path="/events" component={Events} />
            <Route path="/aboutUs" component={Events} />
            <Route path="/resources" component={Resources} />
            <Route path="/team" component={Team} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
    </>
  );
};

export default App;
