import React from 'react';
import { Router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Layouts/Main'
import MainBanner from './components/MainBanner';

const App = () => {
  return (
    <Main >
      <MainBanner />
      <Router />
    </Main>

  );
}

export default App;
