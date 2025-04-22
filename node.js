
const express = require ('express')
const app = express();

app.get('/' , function(req , res){
    res.send("slashh");
})

app.get('/profile' , function(req , res){
    res.send(" profile slashh");
})

app.listen(3000);
