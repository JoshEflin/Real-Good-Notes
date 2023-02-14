const html = require('./html-routes');
const api = require('./api-routes');
const express = require('express');

const app =  express();

app.use ('/api', api);
app.use ('/notes', html);

module.exports = app;
