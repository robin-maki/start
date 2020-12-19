const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

let config = {};

try {
    config = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '..', '..', 'config.yaml')));
}
catch(e) {
    console.warn('Error loading config.yaml. Use default config instead');
}

// noinspection MagicNumberJS
module.exports = {
    port: config.port ? Number(config.port) : 8180,
    mongoUri: config.mongo_uri || 'localhost/db'
};
