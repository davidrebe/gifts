import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import { doLogout } from "../../actions/login-actions";
import Gifts from "../pages/Gifts";
import Login from "../pages/Login";
import User from "../pages/User";
import Menu from "../presentational/Menu";

const Routes = () => {
  const username = useSelector((state) => state.login.email);
  const isAuthenticated = useSelector((state) => state.login.token !== undefined);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(doLogout());
  };

  return  (
    <BrowserRouter>
      <Container>
        <Menu username={username} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Switch>
          <Route exact path="/">
           <Redirect to="/login" />
          </Route>
          {isAuthenticated && (
            <Route exact path="/gifts" component={Gifts} />
          )}
          {!isAuthenticated && (
            <Route exact path="/gifts" component={Login} />
          )}
         {isAuthenticated && (
            <Route exact path="/user" component={User} />
          )}
          {!isAuthenticated && (
            <Route exact path="/user" component={Login} />
          )}
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Login}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default Routes;
