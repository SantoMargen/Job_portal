const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/companyController");
const { authentocationCompany } = require("../middlewares/authentication");

router.post("/register", CompanyController.registerCompay);
router.post("/login", CompanyController.loginCompany);
router.post("/job", authentocationCompany, CompanyController.addJob);
router.get("/job", authentocationCompany, CompanyController.getAllJobById);

module.exports = router;
