const express = require("express");
const ApplicantController = require("../controllers/applicantController");
const router = express.Router();

router.post("/register", ApplicantController.registerApplicant);
router.post("/login", ApplicantController.loginApplicant);

module.exports = router;
