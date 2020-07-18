import React from 'react';
import { Router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar/TopBar';

const App = () => {
  return (
    <>
      <Router />
      <TopBar />
    </>
  );
}

export default App;
