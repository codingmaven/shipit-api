'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var env = process.env.NODE_ENV || 'development';
_mongoose2['default'].connect(_config2['default'][env].db);

_mongoose2['default'].connection.on('connected', function () {
  console.log('Mongoose connection open');
});

_mongoose2['default'].connection.on('error', function (err) {
  console.error('Mongoose connection error: ' + err);
});

_mongoose2['default'].connection.on('disconnected', function () {
  console.error('Mongoose connection disconnected');
});

process.on('SIGINT', function () {
  _mongoose2['default'].connection.close(function () {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = _mongoose2['default'].connection;