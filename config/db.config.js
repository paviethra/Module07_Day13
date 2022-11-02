const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/urlshort';

mongoose.connect(DB_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family:4
});

const connection = mongoose.connection;

module.exports = connection;

