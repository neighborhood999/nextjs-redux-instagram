import React from 'react';
import App from '../components/App';
import User from '../containers/User';

class UserProfile extends React.Component {
  static async getInitialProps({ store }) {
    return {
      initialState: store.getState()
    };
  }

  render() {
    return (
      <App>
        <User />
      </App>
    );
  }
}

export default UserProfile;
