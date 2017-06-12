import { createStore } from 'redux';
import rootReducer from '../reducers';

export const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState);
};
