import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

export const configureStore = preloadedState => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  return {
    ...createStore(rootReducer, preloadedState, applyMiddleware(...middleware)),
    runSaga: sagaMiddleware.run
  };
};
