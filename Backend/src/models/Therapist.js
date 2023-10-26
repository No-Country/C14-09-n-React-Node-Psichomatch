const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Therapist",
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

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },

      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      rating:{
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },

      linkedIn: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      // Relación con Nacionalidad
      nationID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      // Fundamentales
      email:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },

      password:{
        type: DataTypes.STRING,
        allowNull: true,
      }
      
    },
    {
      timestamps: false,
    }
  );
};
