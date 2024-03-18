const { Router } = require('express');
const router = Router(); 
// const UserRoute = require('../models/UserRoute'); 
const { registerUser } = require('../controller/userController');



// Create a new userRoute
router.post('/register', registerUser)



module.exports = router