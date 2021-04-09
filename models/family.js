const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Family = sequelize.define('family',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
     },
     nama: Sequelize.STRING,
     umur: {
         type: Sequelize.INTEGER,
         allowNull: false
     },
     status: {
         type:Sequelize.STRING,
         allowNull: false
     }
})


module.exports = Family;