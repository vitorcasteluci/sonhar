import React from 'react';
import { Router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Links from './Containers/Links'

const App = () => {
  return (
    <div>
      <Links />
      <Router />
    </div >
  );
}

export default App;
