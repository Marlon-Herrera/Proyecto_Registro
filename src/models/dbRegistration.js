const mongoose = require('mongoose');
const { Schema } = mongoose;

const dbRegistration = new Schema({
    name: String,
    age: Number,
    email: String
});

module.exports = mongoose.model('dbRegistration', dbRegistration);