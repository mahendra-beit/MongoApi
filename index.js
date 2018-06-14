var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mroute = require('./mroute/mroute');
/* for parsing the incoming request */
app.use(bodyParser.json());

app.use(function(req,res,next) {
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
next();
}); 


var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/capgemini');

var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'));

db.once('open',function(){
    console.log("mongo db connection is open ");
});




app.listen("4780",function(){
    console.log("server is listenddd")
});

app.use("/mongoApi/",mroute);