const {Router} = require('express');
const { getAllDogs, getDogsDetail, getDogsDetailDB } = require('../controllers/dogsControl');


const  router= Router();

router.get('/', getAllDogs);
router.get('/:id', getDogsDetail);



module.exports =router;