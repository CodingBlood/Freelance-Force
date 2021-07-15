const express = require("express");
const app = express();
const path = require('path');
app.use(express.urlencoded({encoded: true}))
const ejsMate = require('ejs-mate');
app.use( express.static( "public" ) );
app.use( express.static("views/CSS") );
app.engine('ejs',ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))
app.get('/',(req, res)=>{
    res.render('index')
})
app.listen(3000, () =>{
    console.log("Server Started!")
})