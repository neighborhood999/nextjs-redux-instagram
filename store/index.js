if (typeof window === 'undefined') {
  module.exports = require('./store.server');
} else {
  module.exports = require('./store.client');
}
