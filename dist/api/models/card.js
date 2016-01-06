'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongooseTimestamp = require('mongoose-timestamp');

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _mongooseModelUpdate = require('mongoose-model-update');

var _mongooseModelUpdate2 = _interopRequireDefault(_mongooseModelUpdate);

/**
 * Version Schema
 */

var Card = new _mongoose.Schema({
    number: { type: String },
    month: { type: String },
    year: { type: String },
    cvc: { type: String }
});

Card.plugin(_mongooseTimestamp2['default']);
Card.plugin(_mongooseModelUpdate2['default'], ['number']);

module.exports = _mongoose2['default'].model('Card', Card);
_bluebird2['default'].promisifyAll(module.exports);
_bluebird2['default'].promisifyAll(module.exports.prototype);