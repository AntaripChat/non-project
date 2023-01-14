const express = require('express');
const app = express();
const PORT = 2000 || process.env.PORT;
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/cpp',(req,res)=>{
    res.render('CPP');
});
app.get('/dsa',(req,res)=>{
    res.render('dsa');
})


app.listen(PORT,()=>console.log("Running"));