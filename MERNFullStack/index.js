const express = require("express");
const app = express();
app.use(express.urlencoded({encoded: true}))
const ejsMate = require('ejs-mate');
app.engine('ejs',ejsMate)
app.get('/',(req, res)=>{
    res.send("hi")
})
app.listen(3000, ()=>{
    console.log("Server Started!")
})