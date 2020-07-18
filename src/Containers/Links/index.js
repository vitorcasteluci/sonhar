import React from "react";
import { Link } from 'react-router-dom'


const Links = () => {
  return (
    <div>
      <Link to="/sobre">
        Sobre
      </Link>
      <Link to="/atendimento">Atendimento</Link>
      <Link to="/fique-por-dentro">Fique por dentro</Link>
      <Link to="/como-ajudar">Como ajudar</Link>
    </div>
  )
}
export default Links