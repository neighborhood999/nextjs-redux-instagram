import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';
import Link from 'next/link';
import { Grid, Header } from 'semantic-ui-react';
import AuthButton from '../components/AuthButton';

const Home = ({ auth }) =>
  <Grid centered>
    <Grid.Row>
      <Header as="h1">
        Instagrammm
        <Header.Subheader style={{ paddingTop: '30px' }}>
          {auth.needAuthentication
            ? 'Hello Guest!'
            : `Hello ${auth.user.username}!`}
        </Header.Subheader>
      </Header>
    </Grid.Row>
    <Grid.Row>
      <AuthButton authStatus={auth.needAuthentication} />
    </Grid.Row>
  </Grid>;

const mapStateToProps = state => ({
  auth: state.auth
});

const propTypes = {
  auth: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps),
  onlyUpdateForPropTypes,
  setPropTypes(propTypes)
)(Home);
