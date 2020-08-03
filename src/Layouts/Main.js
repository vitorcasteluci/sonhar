import React from 'react'
import TopBar from "../components/TopBar/TopBar"
import "./Main.css"
import Footer from "../components/Footer"
import Logo from '../components/Logo'

const Main = ({ children, width }) => {
  return (
    <div>
      {width > 800 && <TopBar />}
      <div className="main-body">
        {children}
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Main