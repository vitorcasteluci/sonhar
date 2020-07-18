import React from 'react'
import TopBar from "../components/TopBar/TopBar"
import "./Main.css"
import Footer from "../components/Footer"

const Main = ({ children }) => {
  return (
    <div>
      <TopBar/>
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Main