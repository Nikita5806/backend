//routing
const express = require ('express')
const app = express();

app.get('/' , function(req , res){
    res.send("slashh");
})

app.get('/profile' , function(req , res){
    res.send(" profile slashh");
})

app.listen(3000);

//middleware

const express = require ('express')
const app = express();

app.use(function(req, res , next){
    console.log("midhhdlee chlaa")
    next();
});

app.get('/' , function(req , res){
    res.send("slashh");
})



app.listen(3000);

//erroe handling 

const express = require ('express')
const app = express();

app.use(function(req, res , next){
    console.log("midhhdlee chlaa")
    next();
});

app.get('/' , function(req , res, next){
   return next(new Error("erorr h"))  ;
})

app.use((err, req, res , next) => {
    console.log(err.stack)
    res.status(500).send('aailaa errorr')
    
})


app.listen(3000);
