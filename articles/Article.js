const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require ("../categories/Category");

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allwNull: false

    },slug:{
        type:Sequelize.STRING,
        allwNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allwNull: false
    }
})

Category.hasMany(Article); // Uma categoria tem muitos artigos
Article.belongsTo(Category); // Um artigo pertence a umna categoria



module.exports = Article;