'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todos = sequelize.define('Todos', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    users_id: {
      type: DataTypes.INTEGER
    }
  }, {});
  Todos.associate = function(models) {
    // associations can be defined here
    Todos.belongsTo(models.User, { foreignKey: "users_id"});
  };
  return Todos;
};