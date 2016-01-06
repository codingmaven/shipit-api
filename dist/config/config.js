'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development: {
		db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stripetoken_dev',
		root: rootPath,
		app: {
			name: 'Phoyolabs Backend API'
		},
		aws: {
			accessKeyId: 'AKIAIFWBFQGBCW7H37MA',
			secretAccessKey: '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'
		},
		upload_path: 'data/uploads',
		secret: 'phoyolabs secret'
	},
	test: {
		db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stripetoken_test',
		root: rootPath,
		app: {
			name: 'Phoyolabs Backend API'
		},
		aws: {
			accessKeyId: 'AKIAIFWBFQGBCW7H37MA',
			secretAccessKey: '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'
		},
		upload_path: 'data/uploads',
		secret: 'phoyolabs secret'
	},
	production: {
		db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stripetoken_prod',
		root: rootPath,
		app: {
			name: 'Phoyolabs Backend API'
		},
		aws: {
			accessKeyId: 'AKIAIFWBFQGBCW7H37MA',
			secretAccessKey: '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'
		},
		upload_path: 'data/uploads',
		secret: 'phoyolabs secret'
	}
};