import { createStore } from 'redux';
import rootReducer from '../';
import auth from '../auth';

describe('rootReducer', () => {
  test("initial state of the root reducer should matches store's state", () => {
    const store = createStore(rootReducer);

    expect(store.getState().auth).toEqual(auth(undefined, {}));
  });

  test('should handle action', () => {
    const store = createStore(rootReducer);
    const action = {
      type: 'REQUEST_ACCESSTOKEN',
      code: 'd97612b276981b09b28bf00b5c379bb2'
    };
    store.dispatch(action);

    expect(store.getState().auth).toEqual(auth(undefined, action));
  });
});
