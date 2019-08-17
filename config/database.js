
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flightJournal', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`${db.name} is connected on ${db.host}`);
});

