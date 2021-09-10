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
    Folder.belongsTo(models.Folder, { foreignKey: "notes_id" });
  };
  return Folder;
};
