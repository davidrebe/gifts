import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import Routes from "./components/functional/Routes";
import { history, store } from "./store/store";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default App;