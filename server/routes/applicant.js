const express = require("express");
const ApplicantController = require("../controllers/applicantController");
const { authenticationApplicant } = require("../middlewares/authentication");
const router = express.Router();

router.post("/register", ApplicantController.registerApplicant);
router.post("/login", ApplicantController.loginApplicant);
router.get("/job", ApplicantController.getAllJobs);
router.post("/:jobId", authenticationApplicant, ApplicantController.applyJob);
router.get(
  "/applied",
  authenticationApplicant,
  ApplicantController.getAllApplied
);
router.get(
  "/applied/:appliedId",
  authenticationApplicant,
  ApplicantController.getApplyByDetail
);

module.exports = router;
