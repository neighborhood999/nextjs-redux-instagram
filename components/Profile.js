import React from 'react';
import PropTypes from 'prop-types';
import RelativeTime from 'react-relative-time';
import {
  compose,
  mapProps,
  lifecycle,
  onlyUpdateForPropTypes,
  setPropTypes
} from 'recompose';
import { Card, Divider, Grid, Icon, Image, Loader } from 'semantic-ui-react';
import { chunk } from '../utils';

const Profile = ({ ProfileSection, PhotosSection }) =>
  <div>
    {ProfileSection}
    <Divider />
    {PhotosSection}
  </div>;

const withProfileSection = ({ user }) => {
  const {
    username,
    profile_picture,
    bio,
    full_name,
    website
  } = user.userDetails;
  let { counts } = user.userDetails;

  if (typeof counts === 'undefined') {
    counts = {};
  }

  return user.isDone
    ? <Grid style={{ marginTop: '50px' }} stackable>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <Image shape="circular" floated="left" src={profile_picture} />
            <h3>{username} <small>{full_name}</small></h3>
            <h4>
              {counts.media} 則貼文{' | '}
              {counts.followed_by} 位粉絲{' | '}
              追蹤 {counts.follows} 人
            </h4>
            <small>{bio}</small>
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>
    : <Loader
        style={{ marginTop: '50px', paddingTop: '100px' }}
        active
        inline="centered"
      />;
};

const withPhotosSection = ({ user }) => {
  const photos = user.photos.map(photo =>
    <Grid.Column key={photo.id}>
      <Card>
        <Card.Content>
          <Image avatar src={photo.user.profile_picture} />{' '}
          {photo.user.username}
          <Card.Meta className="right floated">
            <RelativeTime value={photo.created_time * 1000} />
          </Card.Meta>
        </Card.Content>
        <Image src={photo.images.standard_resolution.url} />
        <Card.Content>
          <Icon name="comment" /> {photo.comments.count} 則留言
          <span className="right floated">
            <Icon name="heart" /> {photo.likes.count} 個讚
          </span>
        </Card.Content>
      </Card>
    </Grid.Column>
  );

  const GridRowPhotos = chunk(photos, 4).map((group, id) =>
    <Grid.Row key={id} columns={4}>
      {group}
    </Grid.Row>
  );

  return (
    <Grid style={{ marginTop: '50px' }} stackable>
      {user.isDonePhotos ? GridRowPhotos : <Loader active inline="centered" />}
    </Grid>
  );
};

const propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default compose(
  lifecycle({
    componentDidMount() {
      if (!this.props.user.userDetails.hasOwnProperty('id')) {
        const { requestUserAndPhotos } = this.props.actions;
        requestUserAndPhotos();
      }
    }
  }),
  onlyUpdateForPropTypes,
  setPropTypes(propTypes),
  mapProps(({ user }) => ({
    ProfileSection: withProfileSection({ user }),
    PhotosSection: withPhotosSection({ user })
  }))
)(Profile);
