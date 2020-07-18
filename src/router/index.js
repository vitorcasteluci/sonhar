import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div><Home /></div>
      </Route>
      <Route exact path="/atendimento">
        <div>Atendimento</div>
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