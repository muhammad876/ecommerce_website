import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Commercial from "./commercial";
import Contact from "./contact";
import Residential from "./residential";
import Vehicles from "./vehicles";
import Works from "./works";
import Dashboard from "./dashboard";
import Header from "./header";
import Registration from "./registration";
function Navigations() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Dashboard />;
      break;
    case "/aboutus":
      component = <Aboutus />;
      break;

    case "/contact":
      component = <Contact />;
      break;
    case "/works":
      component = <Works />;
      break;

    case "/commercial":
      component = <Commercial />;
      break;
    case "/residential":
      component = <Residential />;
      break;
    case "/vehicles":
      component = <Vehicles />;
      break;
    case "/registration":
      component = <Registration />;
      break;
    default:
      break;
  }
  return (
    <div>
      <Header></Header>
      {component}
    </div>
  );
}

export default Navigations;
