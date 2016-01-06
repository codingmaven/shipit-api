"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (req, res, next) {
  res.error = function (message) {
    var code = arguments.length <= 1 || arguments[1] === undefined ? 400 : arguments[1];
    var showToUser = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    return res.status(code).json({
      success: false,
      error: message,
      message: message,
      showToUser: showToUser
    });
  };
  next();
};

module.exports = exports["default"];