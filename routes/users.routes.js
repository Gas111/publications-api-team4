const express = require('express')
const router = express.Router()
const getUsers= require("../controllers/user.controller")
const getUserById= require("../controllers/user.controller")
const putUserById= require("../controllers/user.controller")


router.get('/', getUsers) 
router.get('/:id', getUserById) 
router.put('/:id', putUserById) 

module.exports = router
