let configDesignation = `./config/config_${process.env.NODE_ENV}`;

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require(configDesignation);
const morgan = require('morgan');

// Open  mongoose connection
mongoose.connect(`mongodb://${config.database_host}:${config.database_port}/${config.database_name}`);

// Get our API routes
const oauth = require('./server/routes/apiOauth');
const api = require('./server/routes/api');
const apiUser = require('./server/routes/apiUser');
const apiArticle = require('./server/routes/apiArticle');

// load express
const app = express();

// set app secret
app.set('secret', config.secret);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use morgan to log requests to the console
if (process.env.NODE_ENV !== "test") app.use(morgan('combined'));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// set our token provider routes
app.use('/api/oauth', oauth);
// Set our api routes
app.use('/api', api);
// Set our user api routes
app.use('/api', apiUser);
// Set our article api routes
app.use('/api', apiArticle);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = server;