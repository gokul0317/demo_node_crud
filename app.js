const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');


const {config} = require('./api/db'),buinessRoutes = require('./routes/business.routes');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin : "http://localhost:4200"}));
app.use('/buisness' ,buinessRoutes );

const port = 3000 || process.env.PORT;


mongoose.Promise = global.Promise;


app.listen(port,()=>{
    console.log('Listening on port ' + port);
})

