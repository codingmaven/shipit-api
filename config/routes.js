import shipitCtrl from '../api/controllers/shipit';

import resError from '../api/middlewares/res_error';
import resSuccess from '../api/middlewares/res_success';


module.exports = function ( app ){

    app.use(resError);
    app.use(resSuccess);

    app.get('/api/carriers/ups/:tracking_number', shipitCtrl.ups);
    app.get('/api/test', shipitCtrl.testApi);

}