const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new mongoose.Schema({
    
    URL: String,
    address: String,
    city: String,
    name: String,
    outcode: String,
    postcode: String,
    rating: Number,
    type_of_food: String
});

RestaurantSchema.pre('findOne', function(){
    this.start = Date.now();
})

RestaurantSchema.post('findOne', function(result){
    
    
    
    console.log('find() took ' + (Date.now() - this.start) + ' millis');
});

RestaurantSchema.pre('find', function(){
    this.start = Date.now();
})

RestaurantSchema.post('find', function(result){
    
    
    
    console.log('find() took ' + (Date.now() - this.start) + ' millis');
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);