import React, { useEffect } from "react";
import { Router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Layouts/Main";
import { useLocation } from "react-router-dom";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => {
  let { pathname } = useLocation();

  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      1000
    );
  }, [pathname]);
  return (
    <Main>
      <Router />
    </Main>
  );
};

export default App;
