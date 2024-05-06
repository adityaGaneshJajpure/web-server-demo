const config = require('./config/config');
const app = require('./app');

const port = config.port;
const server = app.listen(port, console.log(`App listening in port ${port}`));

module.exports = server;
