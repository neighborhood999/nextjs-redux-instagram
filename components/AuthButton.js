import React from 'react';
import PropTypes from 'prop-types';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';
import Link from 'next/link';
import { Button, Grid } from 'semantic-ui-react';

const AuthButton = ({ authStatus }) =>
  authStatus
    ? <Grid centered>
        <Grid.Row>
          <Button color="green">
            <Link
              href={`https://api.instagram.com/oauth/authorize/?client_id=${process
                .env
                .CLIENT_ID}&;redirect_uri=http://localhost:3000/&response_type=code&scope=public_content+follower_list`}
            >
              <a style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                Authentication
              </a>
            </Link>
          </Button>
        </Grid.Row>
      </Grid>
    : <Grid centered>
        <Grid.Row>
          <Button basic color="blue">
            <Link href="/userProfile">
              <a>Profile</a>
            </Link>
          </Button>
        </Grid.Row>
      </Grid>;

export default compose(
  onlyUpdateForPropTypes,
  setPropTypes({ authStatus: PropTypes.bool.isRequired })
)(AuthButton);
