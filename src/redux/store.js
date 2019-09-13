import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export const configureStore = preloadedState => createStore(
  createRootReducer(history),
  preloadedState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
    ),
  ),
);
