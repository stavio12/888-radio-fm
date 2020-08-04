import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserUidContext from "./UserUidContext";

import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Booking from "./components/Booking";
import ProductionPage from "./components/production/ProductionPage";
import AdminPage from "./components/Admin/AdminPage.js";
import AdminWorkspace from "./components/Admin/AdminWorkspace";

//Using reducer to store up user UID after they login
function reducer(state = "", action) {
  switch (action.type) {
    case "Uid":
      return action.payload;

      break;
  }

  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer);

  return (
    <>
      <Router>
        <Nav dispatch={dispatch} />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/booking" component={Booking} />
        <Route path="/production" exact>
          <ProductionPage user={state} />
        </Route>
        <Route path="/admin" exact>
          <AdminPage user={state} />
        </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
