var chai = require('chai');
var mocha = require('mocha');
var mroutes = require('../mroute/mroute');
var logger = require('../logger');

var companies = require('../schema/schema');

var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/capgemini');


describe("export checks",function(){

    it("mroute must exits", function(){
       chai.expect(mroutes).not.to.be.undefined;
       // chai.should.exist(mroutes);
    });

    it("logger  must be exported ", function(){
        chai.expect(logger).not.to.be.undefined;
    });

});


describe("Mongo Asyschronous check",function(){

    it("Pattern must not be return", function(done){
        let  temp = 'z';
       companies.find({name:{$regex:temp,$options:'i'}},{_id:0,name:1},function(err,data){
           chai.expect(err).to.equal(null);
           done();
        })
    });

});


describe("must return exactly one record ",function(){

    it("Pattern must not be return", function(done){
        
       companies.find({name:{$regex:"Wetpaint",$options:'i'}},{_id:0,name:1},function(err,data){
           chai.expect(data.length).to.equal(1);
           done();
        })
    });

});






