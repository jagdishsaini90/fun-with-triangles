import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import Area from "./Pages/Area";
import Hypotenuse from "./Pages/Hypotenuse";
import IsTraingle from "./Pages/isTriangle";
import Quiz from "./Pages/Quiz";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/istriangle" component={IsTraingle} />
        <Route path="/hypo" component={Hypotenuse} />
        <Route path="/area" component={Area} />
        <Route path="/" component={Quiz} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
