"use strict";

var Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      title: {
        type: DataTypes.STRING(75),
        allowNull: false,
      },
      textbody: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    {}
  );
  Note.associate = function (models) {
    Note.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Note;
};
