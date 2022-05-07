const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  
  const Receta = sequelize.define('Receta', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    spoonacularScore: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      }
    },

    healthScore: {
      type: DataTypes.INTEGER,
    },

    steps: {
      type: DataTypes.TEXT,
    }
  }, {
    timestamps: false
  });

  const Dieta = sequelize.define('Dieta', {
    title: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false
  });
};