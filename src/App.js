import React, { useEffect } from "react";
import { Router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Layouts/Main";
import { useLocation } from "react-router-dom";
import { withSize } from 'react-sizeme'
import Sidebar from './components/Sidebar'
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = (props) => {
  let { pathname } = useLocation();
  const { width } = props.size
  console.log(width)

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
    <>
      {width < 800 && <Sidebar width={width} />}
      <Main width={width}>
        <Router />
      </Main>
    </>

  );
};

const withSizeHOC = withSize()
export default withSizeHOC(App);
