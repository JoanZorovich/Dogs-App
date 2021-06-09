const {Router} = require('express');
const {addDog} = require('../controllers/dogControl')

const  router= Router();


router.post ('/', addDog);

module.exports =router;