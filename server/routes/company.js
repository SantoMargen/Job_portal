const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/companyController");
const { authenticationCompany } = require("../middlewares/authentication");

router.post("/register", CompanyController.registerCompay);
router.post("/login", CompanyController.loginCompany);
router.post("/job", authenticationCompany, CompanyController.addJob);
router.get("/job", authenticationCompany, CompanyController.getAllJobById);

module.exports = router;
