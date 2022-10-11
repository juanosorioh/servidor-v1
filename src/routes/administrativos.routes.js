const { Router } = require('express');
const router = Router();

const {borrarPersonas} = require('../controllers/administrativos.controllers')

router.put('/delete',borrarPersonas);

module.exports = router;