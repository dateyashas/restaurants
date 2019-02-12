import { Router } from 'express';

import * as controller from './controller';

const routes = new Router();

routes.get('/restaurants/getAll', controller.getAll);
routes.get('/restaurants/getByCity/:city?', controller.getByCity);
routes.get('/restaurants/getByName/:name?', controller.getByName); //use encoding and decoding for safer passing params with special char
routes.get('/restaurants/getByRating/:rating?', controller.getByRating);
routes.get('/restaurants/getByType/:type?', controller.getByType);
routes.get('/restaurants/countCity/:city?', controller.countCity);
routes.get('/restaurants/getBestRestaurantsByCity/:city?', controller.getBestRestaurantsByCity);
routes.get('/restaurants/getBestRestaurantsByCityAndType/:city?/:type?', controller.getBestRestaurantsByCityAndType);
routes.get('/restaurants/getAvgRatingByCity/:city?', controller.getAvgRatingByCity);
routes.post('/restaurants/addRestaurant', controller.addRestaurant);
routes.post('/restaurants/deleteRestaurant', controller.deleteRestaurant);
routes.post('/restaurants/editRestaurant', controller.editRestaurant);

export default routes;