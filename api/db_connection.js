const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USER, process.env.MARIADB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

);
module.exports = sequelize;