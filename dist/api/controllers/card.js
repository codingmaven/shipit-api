'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _models = require('../models');

var env = process.env.NODE_ENV || 'development';
var config = require('__dirname + /../../config/config')[env];

function uploadCard(req, res, next) {
    var card;
    return _regeneratorRuntime.async(function uploadCard$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:

                console.log('uploadCard');

                if (!(typeof req.body.number == "undefined")) {
                    context$1$0.next = 3;
                    break;
                }

                return context$1$0.abrupt('return', res.error("missing or invalid input parameter", 400, "Number field is required."));

            case 3:
                card = new _models.Card(req.body);
                context$1$0.next = 6;
                return _regeneratorRuntime.awrap(card.saveAsync());

            case 6:
                res.success({ id: card._id, createdAt: card.createdAt });

            case 7:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
}

function testApi(req, res, next) {
    return _regeneratorRuntime.async(function testApi$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                res.success({ message: "Api Exists" });

            case 1:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
}

module.exports = {
    uploadCard: uploadCard,
    testApi: testApi
};