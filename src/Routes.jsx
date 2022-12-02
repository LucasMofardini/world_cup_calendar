import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFoundPage from "./Pages/NotFoundPage";
import Calendar from "./Pages/Calendar/Calendar";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/calendario">
          <Calendar />
        </Route>
        <Router>
          <NotFoundPage />
        </Router>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
