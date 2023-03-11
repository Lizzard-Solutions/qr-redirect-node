
const express = require('express');
const axios = require('axios');
const { run } = require('node:test');
const fs = require('fs')
require("dotenv").config();





const app = express()
app.use(express.json())

const configure = async () => {
app.listen(process.env.PORT, () => {
console.log(`App started on port: ${process.env.PORT}`) 
})
}
app.use(express.static('public'))
app.engine('html', require('ejs').renderFile);
app.get('/',async function(req,res) {

    res.render(__dirname + "/page.html", {"url":process.env.csvURI});
    
  });

configure()
