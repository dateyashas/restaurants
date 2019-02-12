const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./config/db');
import { RestaurantRoutes }  from './models';

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())
app.use('/', [ RestaurantRoutes ]);

const PORT = 3000;

app.listen(PORT, err => {
    if(err) { 
        console.log(err);
    } else {
        console.log(`App listening to port: ${PORT}`);
    }
});

process.on('SIGNIT', function(){
    console.log("\nGracefully shutting down from SIGINT (ctrl+c)");

    process.exit(1);
});