import React from 'react'
import Links from "../../Containers/Links"

const Main = ({ children }) => {
  return (
    <div>
      <div>
        Topbar
        <Links />

      </div>
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