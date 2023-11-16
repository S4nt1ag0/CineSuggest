const express = require('express')
const app = express()

app.get('/', function(req,res) {
    res.send('Hello Word')
})

app.listen(3000,function(){
    console.log('Examplo app escutando requisições na porta 3000')
})