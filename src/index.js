
import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Particles from "react-particles-js";
import { particlesOptions } from "../dist/particles";

const App = () => {
  return (
    <>
      <Particles
        style={{ position: "absolute" }}
        params={particlesOptions}
      />
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Hello}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/skills" component={Skills}></Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);

