const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//Setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../app/views'));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

module.exports = app;