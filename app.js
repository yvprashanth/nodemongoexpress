var express = require('express');
var app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// var db = mongoose.connect('mongodb://localhost/bookAPI');
mongoose.connect('mongodb://localhost/funnelAPI');

var Book = require('./models/bookModel');
var Funnel = require('./models/funnelModel');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || 3000;
app.get('/', function(req, res){
    res.send("Welcome to Migrations Funnel API");
});

var bookRouter = require('./Routes/bookRoutes')(Book);
var funnelRouter = require('./Routes/funnelRoutes')(Funnel);

app.use('/api/books', bookRouter);
app.use('/api/funnel', funnelRouter);

app.listen(port, function(){
    console.log('Gulp is running my app on PORT : ' + port);
});
