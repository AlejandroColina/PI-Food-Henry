const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Diet = sequelize.define('Diet', {
        title: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    });
};