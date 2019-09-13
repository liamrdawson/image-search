import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from 'redux/store';

import Home from 'Home';

const store = configureStore();
const supportsHistory = 'pushState' in window.history;

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter
        forceRefresh={!supportsHistory}
        history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
