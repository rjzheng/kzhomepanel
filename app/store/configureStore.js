/* Node Modules */
import * as redux from 'redux';
import reduxPromise from 'redux-promise';

/* Reducers */
import { globalReducer } from 'reducers';


export function configure() {
  // Combine all custom reducers
  var reducer = redux.combineReducers({
    globalReducer
  });

  // Create store with reducers, middleware and chrome dev tool extension
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(reduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
