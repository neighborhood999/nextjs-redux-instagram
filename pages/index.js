import React from 'react';
import { requestAccessToken } from '../actions/auth';
import App from '../components/App';
import Home from '../containers/Home';

class Root extends React.Component {
  static async getInitialProps({ isServer, store, query }) {
    const { auth: { needAuthentication } } = store.getState();
    const { code } = query;

    if (code && needAuthentication) {
      await store.execSagaTasks(isServer, dispatch =>
        dispatch(requestAccessToken(code))
      );
    }

    return {
      initialState: store.getState()
    };
  }

  render() {
    return (
      <App>
        <Home />
      </App>
    );
  }
}

export default Root;
