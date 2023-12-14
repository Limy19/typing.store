const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const fileUpload = require('express-fileupload');

const verifyAccessToken = require('../middleware/verifyJWT');

function serverConfig(app) {
  app.use(fileUpload());
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(verifyAccessToken);
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
}

module.exports = serverConfig;
