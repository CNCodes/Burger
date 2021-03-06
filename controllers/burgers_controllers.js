var express = require('express');

var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
      // Send back the ID of the new quote
      res.json({ result });
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    var val = req.body.devoured;

  
    console.log(id, val);
  
    burger.updateOne(val, id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  module.exports = router;