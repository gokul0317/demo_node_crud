const express = require('express');
const app = express();
const buisnessRoutes = express.Router();
var objectID = require('mongoose').Types.ObjectId;

const Business = require('../models/buisness');

buisnessRoutes.post('/', (req,res) =>{
 let business = new Business(req.body);
 business.save()
 .then( business =>{
     res.status(200).json({
         'message' : 'Data Addded Succesfully'
     })
 }).catch( err =>{
     res.status(500).json({
         'message' : 'Data Not Added'
     })
 })

});

buisnessRoutes.get('/', (req,res,next) =>{
    Business
    .find()
    .exec()
    .then( (buisness) => {
         res.status(200).json(buisness)
    }) 
    .catch( err =>{
        res.status(500).json({
            'message' : 'No data Found'
        })
    })

});

buisnessRoutes.get('/:id', (req,res,next) =>{
  let id = req.params.id;
  if(!objectID.isValid(req.params.id))
  return status(400).send(`Error in ID given : ${req.params.id} `);
  else
  Business.findById(id)
  .exec()
  .then( business => {
      res.status(200).json(business)
  })
  .catch( err => {
      res.status(400).json({
          'message' : 'No data Found'
      })
  })
});

buisnessRoutes.put('/:id', (req,res) =>{
   let id = req.params.id;

   Business.findById(id,(err,buisness) =>{
  if(!buisness){
      return staus(404).json({ 'message' : 'Could not find the itesm'});
  }
 else{
    console.log(req);
    var buisness_data = {
        person_name : req.body.person_name,
        company_name : req.body.company_name,
        phone : req.body.phone
    };

   Business.findByIdAndUpdate(id,{ $set : buisness_data} , {new : true}, (err , doc) =>{
    if( !err) { console.log(doc); res.send(doc); }
    else { console.log( 'Error :' + JSON.stringify( err, JSON.stringify(err,undefined,2)))}
   })

 }

   })
    
});

buisnessRoutes.delete('/:id', (req,res)=>{
let id = req.params.id;
Business.findByIdAndDelete(id , (err,doc) =>{
    if( !err) { console.log(doc); res.send(doc); }
    else { console.log( 'Error :' + JSON.stringify( err, JSON.stringify(err,undefined,2)))}
})

})


module.exports = buisnessRoutes;