import React from 'react'
import TopBar from "../components/TopBar/TopBar"


const Main = ({ children }) => {
  return (
    <div>
      <TopBar/>
      <div>
        {children}
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

export default Main