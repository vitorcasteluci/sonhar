import React from 'react';
import { Router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import TopBar from './components/TopBar/TopBar';

const App = () => {
  return (
    <>
      <Router />
      <TopBar />
    </>
=======
import Main from './pages/Layouts/Main'

const App = () => {
  return (
    <Main >
      <Router />
    </Main>

>>>>>>> master
  );
}

export default App;
