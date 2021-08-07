import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ShoppingCart from "./ShoppingCart";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState } from "./redux/initialState";
import { reducer } from "./redux/reducer";

export const App = () => {
  const store = createStore(reducer, initialState);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/cart">
            <ShoppingCart />
          </Route>

          <Route path="*"></Route>
        </Switch>
      </Router>
    </Provider>
  );
};
