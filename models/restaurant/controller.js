const helper = require('./helper');

export const getAll = (req, res) => {
    try {
        helper.getAll().then((data) => {
            return res.json({
                success: true,
                data: data
            })
        })
    } catch(e){
        return res.json({error: true, errorMsg: e.message});
    }
}

export const getByCity = (req, res) => {
    try{
        console.log('CONTROLLER')
        //let { city } = req.query;
        let city = req.params.city;

        helper.getByCityData(city).then((data) => {
            return res.json({
                success: true,
                data: data
            })
        })
    } catch(e){
        return res.json({error: true, errorMsg: e.message});
    }
}

export const getByName = (req, res) => {
    try {
        let name = req.params.name;

        helper.getByNameData(name).then((data) => {
            return res.json({
                success: true,
                data: data
            })
        })
    } catch(e) {
        return res.json({error: true, errorMsg: e.message});
    }
}

export const getByRating = (req, res) => {
    try {
        let rating = req.params.rating;

        helper.getByRatingData(rating).then((data) => {
            return res.json({
                success: true,
                data: data
            })
        })
    } catch(e) {
        return res.json({error: true, errorMsg: e.message});
    }
}

export const getByType = (req, res) => {
    try {
        let type = req.params.type;

        helper. getByTypeData(type).then((data) => {
            return res.json({
                success: true,
                data: data
            })
        })

    } catch(e) {
        return res.json({error: true, errorMsg: e.message});
    }
}

export const countCity = (req, res) => {
    try {
        let city = req.params.city;

        helper.countCityData(city).then((data) => {
            return res.json({
                success: true,
                data: data
            })
        }) 
    } catch(e) {
        return res.json({error: true, errorMsg: e.message});
    }
}

export const getBestRestaurantsByCity = (req, res) => {
    try {
        let city = req.params.city;

        helper.getBestRestaurantsByCityData(city).then((data) => {
            return res.json({
                success: true,
                data: data
            })
        })
    } catch(e) {
        return res.json({error: true, errorMsg: e.message});
    }
}

export const getBestRestaurantsByCityAndType = (req, res) => {
    try {

        let city = req.params.city;
        let type = req.params.type;
        //let params = {city: req.params.city, type: req.params.type};
        console.log(req.params);
        helper.getBestRestaurantsByCityAndTypeData(city, type).then((data) => {
            return res.json({
                success: true,
                data: data
            })
        })

    } catch(e) {
        return res.json({error: true, errorMsg: e.message})
    }
}

export const getAvgRatingByCity = (req, res) => {
    try {
        //let city = req.params.city;

        helper.getAvgRatingByCityData().then((data) => {
            return res.json({
                success: true,
                data: data
            })
        })

    } catch(e) {
        return res.json({error: true, errorMsg: e.message})
    }
}

export const addRestaurant = (req, res) => {
    try {

        //console.log(req.body)
        let data = req.body;

        helper.addRestaurantData(data).then((newres) => {
            return res.json({
                success: true,
                data: newres
            })
        })

    } catch(e){
        return res.json({error: true, errorMsg: e.message});
    }
}

export const deleteRestaurant = (req, res) => {
    try {

        let data = req.body;

        helper.deleteRestaurantData(data).then((newres) => {
            return res.json({
                success: true,
                data: newres
            })
        })

    } catch(e) {
        return res.json({error: true, errorMsg: e.message});
    }
}

export const editRestaurant = (req, res) => {
    
    try {

        let data = req.body;

        helper.editRestaurantData(data).then((newres) => {
            return res.json({
                success: true,
                data: newres
            })
        })

    } catch(e) {
        return res.json({error: true, errorMsg: e.message});
    }
}