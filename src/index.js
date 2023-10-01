const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://127.0.0.1/proyect_registration')
    .then(db => console.log('BD is Connected '))
    .catch(err => console.error(err));

//settings 
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/registration', require('./Routes/registration'));

//static files
app.use(express.static(__dirname + '/public'));

//Listenig Server

app.listen(app.get('port'), () => {
    console.log('Server is listening ' + app.get('port'));
});

