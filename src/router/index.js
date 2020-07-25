import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Containers/Main'
import About from "../Containers/About"
import Help from "../Containers/Help"
import Info from "../Containers/Info"

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/atendimento">
        <About />
      </Route>
      <Route exact path="/como-ajudar">
        <Help />
      </Route>
      <Route exact path="/fique-por-dentro">
        <Info />
      </Route>
    </Switch>
  )
}