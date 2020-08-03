import React, { useEffect } from "react";
import { Router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Layouts/Main";
import { useLocation } from "react-router-dom";
import { withSize } from 'react-sizeme'

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { slide as Menu } from 'react-burger-menu'


const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '20px',
    height: '15px',
    left: '16px',
    top: '16px',


  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

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
      {width < 800 && <Menu styles={styles} isOpen={true}>
        <a>Hello</a>
        <a >Home</a>
        <a >About</a>
        <a >Contact</a>
        <a >Settings</a>
      </Menu>}

      <Main width={width}>
        <Router />
      </Main>
    </>

  );
};

const withSizeHOC = withSize()
export default withSizeHOC(App);
