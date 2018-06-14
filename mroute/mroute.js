var express = require('express');
var route = express.Router();
var companies = require('../schema/schema');
route.get('/companies/:name',function(req,res){
    let name = req.params.name;
    companies.find({name:name},function(err,data){
        
        if(err){
            console.log("inside if")
            res.json({});
        }else{ 
            console.log("Asdasd insidesss") 
            console.log(data)          
            res.json(data);
        }
    })    
});
module.exports = route;
