var express = require("express");
var app = express();
var HTTP_PORT = process.env.PORT || 8080;

require('dotenv').config();

app.use(express.static("views"));
app.use(express.static("public"));

const { engine } = require("express-handlebars");
app.engine('.hbs',engine({extname: '.hbs'}));
app.set('view engine','.hbs');

function OnHttpStart(){
    console.log("Express server started successfully on port: "+ HTTP_PORT);
}

app.get("/",(req,res)=> {res.render("home",{layout:false})});
app.get("/about",(req,res)=> {res.render("about",{layout:false})});
app.get("/contact",(req,res)=> {res.render("contact",{layout:false})});

app.listen(HTTP_PORT,OnHttpStart);