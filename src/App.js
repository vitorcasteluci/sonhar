import React from 'react';
import { Router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Layouts/Main'


const App = () => {
  return (
    <Main >
      <Router />
      <Articles image={anxiety} title="ANSIEDADE" content="A ansiedade é uma emoção muito importante na vida do ser humano. É através dessa emoção que podemos imaginar algo que irá..."></Articles>
    </Main>

  );
}

export default App;
