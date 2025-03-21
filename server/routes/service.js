const express = require("express");
const router = express.Router();
const { submitContactForm, getAllContactForms, deleteContactForm } = require("../controllers/contact");


router.post("/submit", submitContactForm);

router.get('/getall', getAllContactForms);

router.delete('/delete', deleteContactForm);

module.exports = router;
