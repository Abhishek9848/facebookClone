const express = require('express');
const { register, verifyEmail ,login} = require('../controllers/user');
const router = express.Router();

router.post('/register', register )
router.post('/activate', verifyEmail )
router.post('/login', login )

module.exports = router