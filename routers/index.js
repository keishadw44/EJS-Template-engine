const express = require('express');
const app = express();


app.set('view engine', 'ejs');

app.get('/', (req, res)=>{

 res.render('home');

    // The render method takes the name of the HTML
    
    // page to be rendered as input
    
    // This page should be in the views folder
    
    // in the root directory.

    const data = {name:'DevDoctor',

    hobbies:['coding', 'teaching', 'travel']}

    
    res.render('home', {data:data});
    
     
    
    });
     
    var server = app.listen(4000, function(){

        console.log('listening to port 4000')
    
    });