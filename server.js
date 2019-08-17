const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const logger = require('morgan');

require('./config/database');

const flightsRouter = require('./routes/flights');
const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/flights', flightsRouter);

app.use(function(req, res, next){
    next(createError(404));
});

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});