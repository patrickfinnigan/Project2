var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/all", function(req, res) {
    var query = {};
    db.Death.findAll({
        where: query
    }).then(function(dbDeath) {
      res.json(dbDeath);
    }).catch(function(err){
      console.log(err);
    });
  });

  // Create a new example
  app.post("/api/new", function(req, res) {
    db.Death.create(req.body).then(function(results) {
      console.log("results", results);
      res.json(results);
    });
  });
  // Create a new example
  app.post("/api/newVictim", function(req, res) {
    db.Death.create(req.body).then(function(results) {
      console.log("results", results);
      res.json(results);
    });
  });
  app.get("/api/deathCount", function(req, res) {
     
    db.Death.findAll({}).then(function(dbDeath) {
      res.json(dbDeath);
    });
  });
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(game_top) {
      res.json(game_top);
    });
  });
};
