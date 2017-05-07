// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var burger= require("../models/burger.js");
var express = require('express');
var router = express.Router();
// ===============================================================================
// ROUTING
// ===============================================================================
router.get('/', function(req, res) {
  burger.selectWhere(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insert([
    'burger_name','devoured'
  ], [
    req.body.burger_name,0
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.update([`devoured`],[1],
  condition, function(data) {
    res.redirect('/');
  });
});

module.exports = router;
