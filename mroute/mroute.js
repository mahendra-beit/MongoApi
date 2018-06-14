var express = require('express');
var route = express.Router();
var companies = require('../schema/schema');

var logger =require('../logger');
var emitrer = require("../events/eventhub");
route.get('/companies/:name',function(req,res){
    let name = req.params.name;
    companies.find({name:name},function(err,data){
        
        if(err){
            res.json({});
        }else{
            res.json(data);
        }
    })    
});

    /* emit JSON array of anme of companies matchning a pattern */

route.get("/cname/:pattern",function(req,res){
        companies.find({name:{$regex:req.params.pattern,$options:'i'}},{_id:0,name:1},function(err,data){
            if(err){                
                res.json([]);                
            }else{
                    if(data.length>= 50)  {
                        emitrer.emit("more",data.length)
                    }                
                res.json(data);
            }
        })
});

/* Update Data Company name */
route.put("/empcount/:name",function(req,res){
    let cname = req.params.name;
    companies.update({name:cname},{$set:req.body},function(err,data){
        if(err){
            res.send({result:"not update record"});
        }else{
            emitrer.emit('update',cname);
            res.send({result:"Successfully Updated Data......"});
        }
    })
});


module.exports = route;