
var  mongoose = require('mongoose');
 var companies = mongoose.model('zipcode',
    new mongoose.Schema({name:String, number_of_employees:Number, founder_year:Number,
    overview:String,
    total_money_raised:String,
    offices:{city:String,address1:String,address:String,zip_code:String}
}),'zipcode');

module.exports = companies;