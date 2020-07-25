import React from "react";
import { Router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Layouts/Main";
import { Testimonials } from "./components/Testimonials";

const App = () => {
  return (
    <Main>
      <Router />
      <Testimonials />
    </Main>
  );
};

export default App;
