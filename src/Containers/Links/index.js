import React from "react";
import { Link } from 'react-router-dom'
import Search from '../../components/Search/index'

const Links = () => {
  return (
    <div>
      <Link to="/sobre">Sobre</Link>
      <Link to="/atendimento">Atendimento</Link>
      <Link to="/fique-por-dentro">Fique por dentro</Link>
      <Link to="/como-ajudar">Como ajudar</Link>
      <Search />
    </div>
  )
}
export default Links