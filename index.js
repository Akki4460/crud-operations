require("./model")

const express = require('express')
const mongoose = require('mongoose')
const app = express();

const path = require('path')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;


const exphbs = require('express-handlebars');
const employeeController = require('./controller/employeeController')



app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutDir: __dirname + "/views/layouts/"
}))
app.set('view engine','hbs')


app.use(express.urlencoded( {extended : true} ))
app.use(express.json());

app.use('/employee',employeeController);

// Above express version 4.16.0 we can use express as body-parser
// in this case body-parser getting deprected so we are using express instead of body-parser
// app.use(express.urlencoded( {
    //     extended : true
    // } ));


app.get("/",(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`app is running on port http://localhost:${port}/`)
})