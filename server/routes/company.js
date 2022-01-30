const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/companyController");

router.post("/register", CompanyController.registerCompay);
router.post("/login", CompanyController.loginCompany);

module.exports = router;
