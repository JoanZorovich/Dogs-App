const {Temperament}= require('../db');



function getAllTemperamentes (req, res,next) {
   
       return Temperament.findAll()
           .then((tempements) =>res.send(tempements))
           .catch((err) =>next(err));
   }


module.exports ={
    getAllTemperamentes
}