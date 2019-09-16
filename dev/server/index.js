const express = require('express');
const bodyParser = require('body-parser');
const logger = require('volleyball');

const routes = require('./routes');

const app = express();
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3030

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);

app.use('/', routes);

app.set('port', port);
app.listen(port, host);

console.log('Server listening on ' + host + ':' + port);

module.exports = app;