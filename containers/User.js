import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';
import Profile from '../components/Profile';
import * as actions from '../actions/user';

const User = ({ user, actions }) =>
  <Profile user={user} actions={actions} />

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onlyUpdateForPropTypes,
  setPropTypes(propTypes)
)(User);
