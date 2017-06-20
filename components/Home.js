import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';
import Link from 'next/link';
import { Button, Grid, Header } from 'semantic-ui-react';

const selectButton = status =>
  status
    ? <Button color="green">
        <Link href="#">
          <a style={{ color: '#FFFFFF', textDecoration: 'none' }}>
            Authentication
          </a>
        </Link>
      </Button>
    : <Button basic color="blue">
        <Link href="#">
          <a>Profile</a>
        </Link>
      </Button>;

const Home = ({ auth }) =>
  <div id="home">
    <Grid centered>
      <Grid.Row>
        <Header as="h1">
          Instagrammm
          <Header.Subheader style={{ paddingTop: '30px' }}>
            Hello Guest!
          </Header.Subheader>
        </Header>
      </Grid.Row>
      <Grid.Row>
        {selectButton(auth.needAuthentication)}
      </Grid.Row>
    </Grid>
  </div>;

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
