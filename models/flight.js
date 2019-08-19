const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['DAL', 'AUS', 'SEA', 'LAX']
    },
    arrival: Date
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
    airport: {
        type: String,
        enum: ['DAL', 'AUS', 'SEA', 'LAX'],
        default: 'SEA'
    },
    destinations: [destinationSchema]
}, { timestamps: true });


module.exports = mongoose.model('Flight', flightSchema);