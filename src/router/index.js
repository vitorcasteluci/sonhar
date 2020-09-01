import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Containers/Main";
import About from "../Containers/About";
import Help from "../Containers/Help";
import Info from "../Containers/Info";
import Attendance from "../Containers/Attendance";
import Publications from "../Containers/Publications";
import Radio from "../components/Radio";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/sobre">
        <About />
      </Route>
      <Route exact path="/atendimento">
        <Attendance />
      </Route>
      <Route exact path="/como-ajudar">
        <Help />
      </Route>
      <Route exact path="/fique-por-dentro">
        <Info />
      </Route>
      <Route exact path="/publicacoes/:id">
        <Publications />
      </Route>
      <Route exact path="/Sobre">
        <About />
      </Route>
      <Route exact path="/radio">
        <Radio />
      </Route>
    </Switch>
  );
};
