const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', function(req,res) {
    res.send('Hello Word')
})

app.listen(3000,function(){
    console.log('Examplo app escutando requisições na porta 3000')
    console.log(process.env.API_KEY)
})