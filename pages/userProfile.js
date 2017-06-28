import React from 'react';
import withRedux from 'next-redux-wrapper';
import { configureStore } from '../store';
import App from '../components/App';
import User from '../containers/User';
import rootSaga from '../sagas';

class UserProfile extends React.Component {
  static async getInitialProps({ store }) {
    store.runSaga(rootSaga);

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
        <User />
      </App>
    );
  }
}

export default withRedux(configureStore)(UserProfile);
