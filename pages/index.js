import React from 'react';
import { END } from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import { configureStore } from '../store';
import { requestAccessToken, receiveAccessToken } from '../actions/auth';
import rootSaga from '../sagas';
import App from '../components/App';
import Home from '../components/Home';

export class Root extends React.Component {
  static async getInitialProps({ store, query }) {
    const rootTask = store.runSaga(rootSaga);
    const { auth: { needAuthentication } } = store.getState();
    const { code } = query;

    if (code && needAuthentication) {
      store.dispatch(requestAccessToken(code));

      // When dispatch `END` action will be terminated regardless of the specified pattern.
      store.dispatch(END);

      await rootTask.done.then(() => {
        console.log('root task done.');
      });
    }

    return {
      initialState: store.getState()
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <App>
        <Home />
      </App>
    );
  }
}

export default withRedux(configureStore)(Root);
