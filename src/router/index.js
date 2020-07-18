import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home'
import About from "../Containers/About"

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div><Home /></div>
      </Route>
      <Route exact path="/atendimento">
        <About />
      </Route>
      <Route exact path="/como-ajudar">
        <div>Como Ajudar</div>
      </Route>
      <Route exact path="/fique-por-dentro">
        <div>Fique por dentro</div>
      </Route>
    </Switch>
  )
}