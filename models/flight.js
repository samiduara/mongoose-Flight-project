const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var destSchema = new Schema({
    destination: {type: String, enum: ["AUN", "DAL", "LAX", "SEA"]}
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            const updatedYear = date.getFullYear() + 1;
            date.setFullYear(updatedYear);
            return date;
        }
    },
    depAirport: {
        type: String,
        required: true,
        enum: ["AUN", "DAL", "LAX", "SEA"]
    },
    destination: [destSchema]

});







module.exports = mongoose.model('Flight', flightSchema);
