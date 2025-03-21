const express = require("express");
const router = express.Router();
const { addUser,loginUser, validateUser } = require("../controllers/userController");


router.post("/signup", addUser);
router.post('/login', loginUser);
router.get('/auth', validateUser);

module.exports = router;
