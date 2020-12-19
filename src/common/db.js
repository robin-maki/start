const monk = require('monk');
const config = require('./config');

const db = monk(config.mongoUri);

module.exports = db;
