module.exports = function(sequelize, DataTypes) {
  var Deaths = sequelize.define("Deaths", {
    name: DataTypes.STRING,
    causeOfDeath: DataTypes.TEXT
  });
  return Deaths;
};
