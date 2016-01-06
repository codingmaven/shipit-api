'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

exports['default'] = function (req, res, next) {
  _passport2['default'].authenticate('bearer-validate', {
    session: false
  }, function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};

;
module.exports = exports['default'];