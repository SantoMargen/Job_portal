const express = require("express");
const router = express.Router();
const company = require("./company");
const errorHandler = require("../middlewares/errorHandler");

router.use("/company", company);

router.use(errorHandler);
module.exports = router;
