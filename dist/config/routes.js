'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _apiControllersCard = require('../api/controllers/card');

var _apiControllersCard2 = _interopRequireDefault(_apiControllersCard);

var _apiMiddlewaresRes_error = require('../api/middlewares/res_error');

var _apiMiddlewaresRes_error2 = _interopRequireDefault(_apiMiddlewaresRes_error);

var _apiMiddlewaresRes_success = require('../api/middlewares/res_success');

var _apiMiddlewaresRes_success2 = _interopRequireDefault(_apiMiddlewaresRes_success);

var _apiMiddlewaresModel_magic = require('../api/middlewares/model_magic');

var _apiMiddlewaresModel_magic2 = _interopRequireDefault(_apiMiddlewaresModel_magic);

module.exports = function (app) {

    app.use(_apiMiddlewaresRes_error2['default']);
    app.use(_apiMiddlewaresRes_success2['default']);

    app.post('/api/stripe', _apiControllersCard2['default'].uploadCard);
    app.get('/api/test', _apiControllersCard2['default'].testApi);

    //app.all('/api/files/:id*', modelMagic('File'));
};