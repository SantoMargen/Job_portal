const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/companyController");

router.post("/register", CompanyController.registerCompay);

module.exports = router;
