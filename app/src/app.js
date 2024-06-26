const cors = require('cors');
const express = require('express');
const Prometheus = require('express-prom-bundle');
const router = require('./routes');

const app = express();

// initialize Prometheus middleware
const metricsMiddleware = Prometheus({
  includeMethod: true,
  includePath: true
});

// Mounts the specified middleware function or functions at the specified path:
// the middleware function is executed when the base of the requested path matches path.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use Prometheus middleware to instrument your routes
app.use(metricsMiddleware);

app.use('/api', router);

module.exports = app;
