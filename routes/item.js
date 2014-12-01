var express = require('express');
var router = express.Router();

//Set up Mongo
var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'mytestapp');

var Item = require('../models/Item.js').Item(db);

/* GET all item listings. */
router.get('/', function(req, res) {
    var criteria = {};
    if (req.param('id')){
        criteria['_id'] = req.param('id');
    }

    Item.find(criteria, function(error, items) {
        res.send({
            items: items
        })
    });
});

/* POST new item. listing */
router.post('/', function(req, res) {
    var item = new Item(req.body);
    item.save(function(error, newItem) {
        console.log('new item')
        res.send(newItem);
    }, function(error) {
        console.log('error')
        res.json({
            error: error
        });
    });
});

/* PUT update item listing. */
router.put('/', function(req, res) {
    Item.update(req.body, function(item) {
        res.send(item);
    }, function(error) {
        res.json({
            error: error
        });

    });
});

/* DELETE item listing. */
router.delete('/', function(req, res) {
    Item.delete(req.param('id'), function() {
        res.send('successfully deleted item');
    }, function(error) {
        console.log('did not delete item');
        res.json({
            error: error
        });
    });
});

module.exports = router;