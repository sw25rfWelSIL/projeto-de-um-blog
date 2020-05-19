const Sequelize = require ("sequelize");

const connection = new Sequelize('press','welsildev','0p9o8i7u', {
    host: 'mysql669.umbler.com',
    dialect: 'mysql',
    timezone: "-03:00"
});


module.exports = connection;