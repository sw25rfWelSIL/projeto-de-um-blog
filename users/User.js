const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define('users', {
    email:{
        type: Sequelize.STRING,
        allwNull: false

    },password:{
        type:Sequelize.STRING,
        allwNull: false
    }
})




module.exports = User;
