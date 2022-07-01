const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordCheck = require("../middleware/password");
// routes pour se co et s'inscrire
router.post("/signup", passwordCheck, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;