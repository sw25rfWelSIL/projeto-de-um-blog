const express = require ("express");
const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const session = require("express-session");
const connection = require("./database/database");

const categorycontroler = require("./categories/Categorycontroler");
const articlecontroler = require ("./articles/Articlecontroler");
const usercontroler = require ("./users/Usercontroler");


const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require ("./users/User");




//view engine
app.set('view engine','ejs');

//session

//Redis

app.use(session({
    secret:"qualquercoisa", cookie: {maxAge: 30000}
}))

//static
app.use(express.static('public'));

//  body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection.
authenticate()
.then(() => {
    console.log("conexão feita com sucesso !");
}).catch((error) => {
    console.log("error");
})


app.use("/", categorycontroler);
app.use("/", articlecontroler);
app.use("/",usercontroler);

app.get("/", (req, res) => {
    Article.findAll({
        order:[
            ['id','DESC']
        ],
        limit: 4
    }).then(articles => {

        Category.findAll().then(categories => {
            res.render("index", {articles: articles , categories: categories});
        });

       });

    })

app.get("/:slug",(req, res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug : slug
        }
    }).then(article => {
        if(article !=undefined){
            Category.findAll().then(categories => {
                res.render("article", {article: article , categories: categories});
            });
        }else{
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    });
})

app.get("/category/:slug", (req, res) => {
    var slug= req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        }, 
        include: [{ model: Article}]
    }).then(category => {
        if(category !=undefined){
           Category.findAll().then(categories => {
                res.render("index",{articles: category.articles, categories: categories});
            });
             }else{
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    })
})
 

app.listen(3000, () => {
    console.log("O servidor esta rodando !")
})