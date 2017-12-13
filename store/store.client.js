import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export const configureStore = preloadedState => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  middleware.push(logger);
  middleware.push(sagaMiddleware);

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  enhancers.push(applyMiddleware(...middleware));

  const enhancer = composeEnhancers(...enhancers);

  return {
    ...createStore(rootReducer, preloadedState, enhancer),
    runSaga: sagaMiddleware.run
  };
};
