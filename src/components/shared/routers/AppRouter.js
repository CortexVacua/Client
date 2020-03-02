import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {RegisterGuard} from "../routeProtectors/RegisterGuard";
import Register from "../../register/Register";
import { GameGuard } from "../routeProtectors/GameGuard";
import GameRouter from "./GameRouter";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../login/Login";
import OverView from "../../OverView/OverView";
import {OverViewGuard} from "../routeProtectors/OverViewGuard";

/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/game"
              render={() => (
                <GameGuard>
                  <GameRouter base={"/game"} />
                </GameGuard>
              )}
            />
            <Route
                path="/overview"
                render={()=> (
                    <OverViewGuard>
                        <OverView />
                    </OverViewGuard>
                )}
            />
            <Route
              path="/register"
              render={() => (
                  <RegisterGuard>
                      <Register />
                  </RegisterGuard>
                )}
            />
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Login />
                </LoginGuard>
              )}
            />
            <Route path="/" exact render={() => <Redirect to={"/register"} />} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default AppRouter;
