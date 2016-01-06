'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

exports['default'] = function (model) {
  var param = arguments.length <= 1 || arguments[1] === undefined ? 'id' : arguments[1];

  var m = _mongoose2['default'].model(model);
  return function callee$1$0(req, res, next) {
    var found;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (_mongoose2['default'].Types.ObjectId.isValid(req.params[param])) {
            context$2$0.next = 2;
            break;
          }

          return context$2$0.abrupt('return', next());

        case 2:
          found = undefined;
          context$2$0.prev = 3;
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(m.findById(req.params[param]));

        case 6:
          found = context$2$0.sent;
          context$2$0.next = 12;
          break;

        case 9:
          context$2$0.prev = 9;
          context$2$0.t0 = context$2$0['catch'](3);
          return context$2$0.abrupt('return', res.error('Could not query model'));

        case 12:
          if (found) {
            context$2$0.next = 14;
            break;
          }

          return context$2$0.abrupt('return', res.error(capitalize(model) + ' not found.', 404));

        case 14:
          if (!req[model]) {
            req[model] = found;
          }
          next();

        case 16:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this, [[3, 9]]);
  };
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = exports['default'];