const { DataTypes } = require("sequelize");
const { Nation } = require("../db.js");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Nation",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  );
};
