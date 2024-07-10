
const express = require('express');

const router = express.Router();
const userController = require('../controllers/usersController');
//authentication
// /api/users/login
router.post('/users/login', userController.userLogin )


// /api/users

router.post('/users', userController.registerUser )

module.exports = router;