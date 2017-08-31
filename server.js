// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const morgan = require('morgan');

// Open  mongoose connection
mongoose.connect(`mongodb://${config.database_host}:${config.database_port}/${config.database_name}`);

// Get our API routes
const oauth = require('./server/routes/apiOauth');
const api = require('./server/routes/api');

const app = express();

// set app secret
app.set('secret', config.secret);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use morgan to log requests to the console
app.use(morgan('dev'));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// set our token provider routes
app.use('/api/oauth', oauth);
// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = config.express_port || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, '0.0.0.0', () => console.log(`API running on localhost:${port}`));
