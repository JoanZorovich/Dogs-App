const {Dog, Temperament}= require('../db')
const { v4: uuidv4 } = require('uuid');


async function addDog (req, res) {
    const {name,height,weight,life_span,temperament} = req.body
    //console.log(req.body)
    try{
       
      const dog= await Dog.create({
        id: uuidv4(),
        name,
        height,
        weight,
        life_span,
    })

    if(temperament){
      temperament.forEach(async (temperament) => {
        let  temp= await Temperament.findOne({
            where: { id: temperament }
        })
        await dog.addTemperament(temp)
    })
    //await dog.addTemperament(temperament)
    }
    console.log(temperament)
    res.send(dog);
    //res.send("Your dog was born");

   }catch(err){
    console.log(err);}
}



module.exports ={
   addDog
}