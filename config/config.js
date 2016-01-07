
var path = require('path')
	, rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development: {
		db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stripetoken_dev',
		root: rootPath,
		app: {
			name: 'Shipit API'
		},
		upload_path: 'data/uploads',
		secret:'shipit secret'
	},
	test: {
		db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stripetoken_test',
		root: rootPath,
		app: {
			name: 'Shipit API'
		},
		upload_path: 'data/uploads',
		secret:'shipit secret'
	},
	production: {
		db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stripetoken_prod',
		root: rootPath,
		app: {
			name: 'Shipit API'
		},
		upload_path: 'data/uploads',
		secret:'shipit secret'
	}
};
