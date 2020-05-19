const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allwNull: false

    },slug:{
        type:Sequelize.STRING,
        allwNull: false
    }
})




module.exports = Category;
