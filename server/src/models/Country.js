const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique:true,
      validate:{
        max:3,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   
  }); 
};