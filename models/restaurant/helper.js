import restaurant from './model';
import { getByCity } from './controller';
var mongoose = require('mongoose');



export function getAll() {
    return new Promise((resolve, reject) => {
        restaurant.find({}).exec(
            (err, restaurant) => {
                if(!err) {
                    console.log(restaurant);
                    resolve(restaurant);
                } else {
                    console.log(err);
                    //resolve(false);
                    reject(true);
                }
        })
    })
}

export function getByCityData(city) {
    return new Promise((resolve, reject) => {
        console.log('HELPER')
        restaurant.find({city: city}).exec(
            (err, restaurant) => {
                if(!err) {
                    console.log(restaurant);
                    resolve(restaurant);
                } else {
                    console.log(err);
                    //resolve(false);
                    reject(true);
                }
        })
    })
}

export function getByNameData(name) {
    return new Promise((resolve, reject) => {
        restaurant.find({name: name}).exec(
            (err, restaurant) => {
                if(!err) {
                    console.log(restaurant);
                    resolve(restaurant);
                } else {
                    reject(true);
                }
            }
        )
    })
}

export function getByRatingData(rating) {
    return new Promise((resolve, reject) => {
        restaurant.find({rating: rating}).sort({rating: -1}).exec(
            (err, restaurant) => {
                if(!err) { 
                    console.log(restaurant);
                    resolve(restaurant);
                } else {
                    reject(true);
                }
            }
        )
    })
}

export function getByTypeData(type) {
    return new Promise((resolve, reject) => {
        restaurant.find({type_of_food: type}).exec(
            (err, restaurant) => {
                if(!err) {
                    console.log(restaurant);
                    resolve(restaurant);
                } else {
                    reject(true);
                }
            }
        )
    })
}

export function countCityData(city) {
    return new Promise((resolve, reject) => {
        restaurant.find({city: city}).count(function(e, count) {
            console.log(count);

        }).exec(
            (err, restaurant) => {
                if(!err) {
                    console.log('Count worked');
                    resolve(restaurant);
                } else {
                    reject(true);
                }
            }
        )
    })
}

export function getBestRestaurantsByCityData(city) {
    return new Promise((resolve, reject) => {
        restaurant.find({city: city, rating: {$type: 'double'}}).sort({ rating : -1 }) .limit(5).exec(
            (err, restaurant) => {
                if(!err) {
                    
                        resolve(restaurant);
                    
                    //console.log('Top 5 restaurants by city');
                    
                } else {
                    reject(true);
                }
            }
        )
    }).catch((e) => {
        console.log('ERR', e);
    })
}

export function getBestRestaurantsByCityAndTypeData(city, type) {
    return new Promise((resolve, reject) => {
        restaurant.find({city: city, type_of_food: type, rating: {$type: 'double'}}).sort({rating: -1}).limit(5).exec(
            (err, restaurant) => {
                if(!err) {
                    resolve(restaurant);
                } else {
                    reject(true);
                }
            }
        )
    })
}

export function getAvgRatingByCityData(city) {
    return new Promise((resolve, reject) => {
        restaurant.aggregate(
            [
                {
                    $group: {
                        _id: "$city", 
                        avgRating: {$avg: "$rating"},
                        restCount: {$sum: 1}
                    }
                }
            ]
        ).exec(
            (err, restaurant) => {
                if(!err) {
                    resolve(restaurant);
                } else {
                    reject(true);
                }
            }
        )
    })
}

export function addRestaurantData(data) {

    return new Promise((resolve, reject) => {

        let rest = new restaurant(data);

        rest.save(function(err, newres) {
            if(err) { 
                console.log(err);
                reject(true)
            } else {
                console.log('Restaurant added', newres);
                resolve(newres);
            }
        })
    })
}

export function deleteRestaurantData(data) {
    return new Promise((resolve, reject) => {

        restaurant.deleteOne({_id: mongoose.Types.ObjectId(data._id) }, function(err, newres) {
            if(err) {
                console.log(err);
                reject(true);
            } else {
                console.log('Restaurant deleted', newres);
                resolve({ deleted: true });
            }
        })
    })
}

export function editRestaurantData(data) {
    return new Promise((resolve, reject) => {

        let edit = data.edit;

        console.log(edit);

        restaurant.updateOne({_id: mongoose.Types.ObjectId(data._id) }, {$set: edit}, function(err, newres) {
            if(err) {
                console.log(err);
                reject(true);
            } else {
                console.log('Edit successful');
                resolve(newres);
            }
        })
    })
}