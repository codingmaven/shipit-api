import {
    UpsClient,
    FedexClient,
    UspsClient,
    DhlClient,
    LasershipClient,
    OnTracClient,
    UpsMiClient,
    DhlGmClient,
    CanadaPostClient,
    AmazonClient,
    PrestigeClient
} from 'shipit'
let env = process.env.NODE_ENV || 'development';
let config = require('__dirname + /../../config/config')[env];

async function ups(req, res, next){
    let {tracking_number} = req.params;
    let ups = new UpsClient({licenseNumber: '8CF57BA6F16298A8', userId: 'MITechbilling', password: 'dLp173Vb'});
    ups.requestData({trackingNumber: tracking_number}, function(err, result){
        if(err) res.json({error:err});
        else res.json(result);
    });
}

async function testApi(req, res, next){
    res.success({message: "Api Exists"});
}

module.exports = {
    ups: ups,
    testApi: testApi
}
