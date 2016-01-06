'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  res.success = function (obj) {
    if (obj && typeof obj.toJSON === 'function') {
      obj = obj.toJSON();
    }
    return res.json(_Object$assign({
      success: true
    }, obj));
  };
  next();
};

module.exports = exports['default'];