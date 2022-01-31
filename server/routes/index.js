const express = require("express");
const router = express.Router();
const company = require("./company");
const applicant = require("./applicant");
const errorHandler = require("../middlewares/errorHandler");

router.use("/company", company);
router.use("/applicant", applicant);

router.use(errorHandler);
module.exports = router;
