import React from 'react'
import TopBar from "../components/TopBar/TopBar"
import "./Main.css"
import Footer from '../pages/Footer/'

const Main = ({ children }) => {
  return (
    <div>
      <TopBar/>
      <div className="main-body">
        {children}
      </div>
      <div className="main-footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Main