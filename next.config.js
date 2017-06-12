const { parsed } = require('dotenv').config();
const { DefinePlugin } = require('webpack');

const { NODE_ENV, CLIENT_ID, CLIENT_SECRET } = parsed;

module.exports = {
  webpack: config => {
    config.plugins.push(
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV),
          CLIENT_ID: JSON.stringify(CLIENT_ID),
          CLIENT_SECRET: JSON.stringify(CLIENT_SECRET)
        }
      })
    );

    return config;
  }
};
