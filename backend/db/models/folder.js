"use strict";
module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define(
    "Folder",
    {
      foldername: DataTypes.STRING,
      allowNull: false,
    },
    {}
  );
  Folder.associate = function (models) {
    // associations can be defined here
  };
  return Folder;
};
