const { Sequelize } = require("sequalize");
const dbConfig = require("../config/db.config");
//Create sequelize instance
const sequelize = new Sequalize(dbConfig.DB, dbConfig.useer, dbConfig.password, {
    host: dbConfig.host,
    dialect: "mysql"
})

//
async function testConection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConection();
module.exports = sequelize;