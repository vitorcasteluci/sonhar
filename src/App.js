<<<<<<< HEAD
import React from 'react';
import { Router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Main from './pages/Layouts/Main'
=======
import Main from './Layouts/Main'
import { Testimonials } from './components/Testimonials';

>>>>>>> feature/Testimonials-quotes
=======
import React from "react";
import { Router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Layouts/Main";
import { Testimonials } from "./components/Testimonials";
>>>>>>> master

const App = () => {
  return (
    <Main>
      <Router />
      <Testimonials />
    </Main>
  );
};

export default App;
