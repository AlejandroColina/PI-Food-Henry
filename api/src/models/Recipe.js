const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // sequelize.define('recipe', {
  //   name: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  // });

  const Receta = sequelize.define('Receta', {
    idReceta: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },

    resumenPlato: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    puntuacion: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 5,
      }
    },

    nivelSaludable: {
      type: DataTypes.FLOAT,
    },

    pasoApaso: {
      type: DataTypes.TEXT,
    }
  }, {
    timestamps: false
  });

  const Dieta = sequelize.define('Dieta', {

    idDieta: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },

    nombre: {
      type: DataTypes.STRING,
    }
  },{
    timestamps: false
  });
};