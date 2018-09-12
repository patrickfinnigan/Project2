module.exports = function(sequelize, DataTypes) {
  var Death = sequelize.define("Death", {
    name: DataTypes.STRING,
    causeOfDeath: DataTypes.TEXT,
    // dateCreated: DataTypes.DATE
  });
  return Death;
};
