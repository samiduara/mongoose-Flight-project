var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const flightShema = new Schema({
  airline: {
    type:String,
    enum:['American','Southwest', 'United']
  },
  flightNo:{
    type:Number,
    required: true,
    min: 10,
    max: 9999
  },
departs: Date,
default: function(){
  const Date = new Date.getFullYear()+ 1;
  Date.setFullYear(updatedYear);
  return Date;
}
},{timestamps:true});

module.exports = mongoose.model('flight', flightShema);


