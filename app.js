var express = require('express');
var app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || 3000;
app.get('/', function(req, res){
    res.send("Welcome to Migrations Funnel API");
});

var funnelRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', funnelRouter); 

app.listen(port, function(){
    console.log('Gulp is running my app on PORT : ' + port);
});
