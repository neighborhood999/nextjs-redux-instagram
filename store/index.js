import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = preloadedState => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  if (typeof window !== 'undefined') {
    middleware.push(logger);
  }

  middleware.push(sagaMiddleware);

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  enhancers.push(applyMiddleware(...middleware));

  const enhancer = composeEnhancers(...enhancers);
  const store = createStore(rootReducer, preloadedState, enhancer);

  // Move `runSaga` from component to store
  // ref: https://github.com/victor36max/next-saga-example/blob/master/lib/store.js
  store.runSaga = () => {
    if (store.saga) return;

    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    if (!store.saga) return;

    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    store.runSaga();
    tasks(store.dispatch);
    await store.stopSaga();

    if (!isServer) {
      store.runSaga();
    }
  };

  store.runSaga();

  return store;
};

export default configureStore;
