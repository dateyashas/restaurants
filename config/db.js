var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Restaurant', {
    connectTimeoutMS: 1000
})

mongoose.set('debug', true);