var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/all", function(req, res) {
    var query = {};
    db.Deaths.findAll({
        where: query
    }).then(function(dbDeaths) {
      res.json(dbDeaths);
    }).catch(function(err){
      console.log(err);
    });
  });

  // Create a new example
  app.post("/api/new", function(req, res) {
    db.Deaths.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(game_top) {
      res.json(game_top);
    });
  });
};
