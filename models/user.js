'use strict';
const { hashPassword } = require("../helpers/bcrypt.js");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, option) => {
        user.password = hashPassword(user.password)
      }}
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};