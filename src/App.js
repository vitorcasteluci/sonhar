import React from 'react';
import { Router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Layouts/Main'


const App = () => {
  return (
    <Main >
      <Router />
    </Main>     
  );
}

export default App;
