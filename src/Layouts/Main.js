import React from 'react'
import TopBar from "../components/TopBar/TopBar"
import "./Main.css"
import Footer from "../components/Footer"

const Main = ({ children, width }) => {
  return (
    <div>
      {width > 800 ? <TopBar /> : <div style={{ height: "48px", width: "100%" }}></div>}
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