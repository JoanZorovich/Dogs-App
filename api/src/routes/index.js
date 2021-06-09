const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const dogsRoute = require('./dogsRoute')
const dogRoute = require('./dogRoute')
const temperamentRoute = require('./temperamentRoute')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogsRoute);
router.use('/dog', dogRoute);
router.use('/temperament', temperamentRoute);

module.exports = router;
