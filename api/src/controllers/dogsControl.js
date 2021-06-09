const {Dog, Temperament}= require('../db')
const axios = require('axios');
const { Op } = require('sequelize');




async function getAllDogs (req, res,next) {

    if (!req.query.name) {
        let perro=[];
        let resp= await axios.get('https://api.thedogapi.com/v1/breeds')
        for (let i of resp.data) {
            perro.push({
                name:i.name,
                img: i.image.url,
                temperament: i.temperament,
                id: i.id,
                weight: i.weight.metric
            })
        }

        let dogsDB= await Dog.findAll({include:[Temperament]});
        perro=perro.concat(dogsDB)
        res.json(perro)


    }
    
    if(req.query.name){
        let resp2= await axios.get('https://api.thedogapi.com/v1/breeds')
        //console.log(resp2.data)
        let perro2=[]
        for (let i = 0; i < resp2.data.length; i++) {
            if (resp2.data[i].name.toLowerCase().indexOf(req.query.name)!==-1) {
                perro2.push({
                    name:resp2.data[i].name,
                    img: resp2.data[i].image.url,
                    temperament: resp2.data[i].temperament,
                    id: resp2.data[i].id,
                    weight: resp2.data[i].weight.metric,
                })
            }
    }
    
           let dogsDB= await Dog.findAll({
                where: { name: { [Op.iLike]: `%${req.query.name}%` } }
                ,
                include: [Temperament]
            })
    if(dogsDB !==null){
        perro2=perro2.concat(dogsDB)
    }
    
    if (perro2.length===0) {
        res.status(404).send('not found')
    }else{
        res.json(perro2)
    }
}
}



//////////////////////////////////////////////////////


// function getAllDogs (req, res,next) {
//     //console.log(name)
//     let { name }=req.query
//     let breeds =[]
//     const dogsApi= axios.get(name
//         ?`https://api.thedogapi.com/v1/breeds/search?q=${name}` 
//         :`https://api.thedogapi.com/v1/breeds`);

//         let dogsDB=[]
//         if(name){
//             dogsDB= Dog.findAll({
//                 where: { name: { [Op.iLike]: `%${name}%` } }
//                 ,
//                 include: [Temperament]
//             })
//         }else{
//             dogsDB= Dog.findAll({include:[Temperament]});
//         }
//         Promise.all([dogsApi, dogsDB])
//         .then(response => {
//             let [dogsApiResponse, dogsDBResponse]=response;
//             //console.log(dogsApiResponse);
//             return res.send([...dogsDBResponse, ...dogsApiResponse.data]);
//         })
//         .catch((err) =>next(err));
//     }

//////////////////////////////////////////////////////

async function getDogsDetail (req, res, next){

var detail =[];
//console.log(req.params.id);

try{
    if(req.params.id.includes('-')){
       res.json (await Dog.findOne({where: {id: req.params.id}, include:[Temperament]}))
    }else{
        const dogs= await axios.get(`https://api.thedogapi.com/v1/breeds`);     
        for(let i of dogs.data) {
            //console.log(i)
                  if (i.id==req.params.id){
                    detail.push({ 
                        name: i.name,
                        image: i.image.url,
                        temperament: i.temperament,
                        weight: i.weight.metric,
                        height: i.height.metric,
                        life_span: i.life_span
                    })
                    res.json(detail)
                    //detail =[];
                  }
                } 
    }    
    }catch(err){ console.log(err);}
}



module.exports ={
    getAllDogs,
    getDogsDetail
}