const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_learn', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    // Opsional untuk port / jika portnya 3306 untuk mysql maka tidak perlu menulis port
    port: 8889
});

module.exports = sequelize;