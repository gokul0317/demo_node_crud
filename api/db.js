const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Angular7db' , (err) => {
    if(!err)
               console.log('connected');
    else
           console.log('Error :' + JSON.stringify(err , undefined , 2));
});


module.exports = mongoose