'use strict';

var mongoose = require('mongoose');
var fs = require('fs');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../../config/config')[env];
var faker = require('Faker');
var mongoose = require('mongoose');
var models_path = __dirname + '/api/models';

mongoose.connect(config.db);

fs.readdirSync(models_path).forEach(function (file) {
    require(models_path + '/' + file);
});

var User = mongoose.model('User');

/*Subscription.remove({event:'55dd8cd1b9c32c030050faac'},function (err) {
    // numAffected is the number of updated documents
    if(!err) console.log("Event Table Cleared");
});*/

/*
Event.remove({}, function(err) {
    if(!err) console.log("Event Table Cleared");
})

console.log("started");

for(var i=0; i<100; i++) {
    var eventData = {
        //host: mongoose.Types.ObjectId(),
        host: "55c0841ee5b04ab4131da344",
        name: faker.Company.companyName(),
        description: faker.Lorem.sentence(3),
        location: faker.Address.city(),
        pos: [faker.Address.longitude(), faker.Address.latitude()],
        price: faker.random.number(100),
        date: faker.Date.between(new Date('8/1/2015'), new Date('8/30/2015')),
        capacity: faker.random.number(100),
        reserved: faker.random.number(100),
        image: faker.random.avatar_uri(),
        approved: faker.random.number(2)-1?true:false,
        createdAt:  faker.Date.between(new Date('7/1/2015'), new Date('7/30/2015'))
    }
    var event = new Event(eventData);

    event.save(function (err) {
        if (err) {
            console.log(err);
            return false;
        }

        console.log("success");
    });
}

User.update({},{$set:{mode:false, phone:''}},{ multi: true },function (err, numAffected) {
    // numAffected is the number of updated documents
    console.log(numAffected);
});*/
/*
var subscriptionData = {
    //host: mongoose.Types.ObjectId(),
    user: "55c0841ee5b04ab4131da344",
    event: "55c0841ee5b04ab4131da344",
    price: 90,
    subscribedAt: faker.Date.between(new Date('8/1/2015'), new Date('8/30/2015')),
    ticked: true,
    guests:[
        {
            "name" : "name1",
            "_id" : "55cabed57e336b8401f714ee"
        },
        {
            "name" : "name2",
            "_id" : "55cabed57e336b8401f714ed"
        }
    ],
    guests_count:2
}
var subscription = new Subscription(subscriptionData);

subscription.save(function (err) {
    if (err) {
        console.log(err);
        return false;
    }

    console.log("success");
});
Subscription.remove({}, function(err) {
    if(!err) console.log("Event Table Cleared");
})*/