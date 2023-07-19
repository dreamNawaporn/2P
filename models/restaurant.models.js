const {DataTypes} = require("sequelize");
const sequelize = require("./db");
//Define the restaurant model 
const Restaurant = sequelize.define("restaurant", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowfull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAT: {
        type: Datatypes.DATE,
        allowNull: true,
        defaultValueL: Datatypes.NOW,
    },
    updatedAT: {
        type: Datatypes.DATE,
        allowNull: true,
        defaultValueL: Datatypes.NOW,
    },
});

testConection();
module.exports = sequelize;