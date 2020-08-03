import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { slide as Menu } from 'react-burger-menu'

import { useLocation } from "react-router-dom";

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '20px',
    height: '15px',
    left: '16px',
    top: '16px',
  },
  bmBurgerBars: {
    background: '#D33B3F'
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
    background: 'white',
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
    display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Sidebar = ({ width }) => {

  let { pathname } = useLocation();
  const currentPath = pathname.substring(1);

  return (
    <Menu styles={styles} isOpen={false}>
      <LinkStyled
        children="Principal"
        to="/"
        className={(currentPath === "" && "active")}
      />
      <LinkStyled
        children="O instituto"
        to="/sobre"
        className={(currentPath === "sobre" && "active")}
      />
      <LinkStyled
        children="Atendimento"
        to="/atendimento"
        className={(currentPath === "atendimento" && "active")}
      />
      <LinkStyled
        children="Como ajudar?"
        to="/como-ajudar"
        className={(currentPath === "como-ajudar" && "active")}
      />
      <LinkStyled
        children="Fique por dentro"
        to="/fique-por-dentro"
        className={(currentPath === "fique-por-dentro" && "active")}
      />

    </Menu>

  )


}

const LinkStyled = styled(Link)`
text-decoration: none !important;
color: #000000;
margin-right: 12px;
margin-left: 12px;
font-size: 16px;
font-family: Lato, Regular;
vertical-align: middle;
&:hover {
  color: #ff0040;
}
&.active {
  color: #ff0040;
}
`
export default Sidebar