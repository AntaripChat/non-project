const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 2000 || process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/cpp',(req,res)=>{
    res.render('CPP');
});
app.get('/dsa',(req,res)=>{
    res.render('dsa');
});
app.post('/feedback',(req,res,next)=>{
    let name = {
       name:req.body.name,
    };
    res.redirect('/');
    next();
    console.log(name);
})


app.listen(PORT,()=>console.log("Running"));