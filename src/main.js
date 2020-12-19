const app = require('./common/app');
const config = require('./common/config');

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});
