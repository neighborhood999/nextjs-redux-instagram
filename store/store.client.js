import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export const configureStore = preloadedState => {
  const middleware = [];
  const enhancers = [];
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  enhancers.push(applyMiddleware(...middleware));

  const enhancer = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
};
