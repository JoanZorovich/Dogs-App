const {Router} = require('express');
const {getAllTemperamentes} = require('../controllers/temperamentControl')

const router = Router();

router.get('/', getAllTemperamentes)

module.exports =router;