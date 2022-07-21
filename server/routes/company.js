const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/companyController");
const { authenticationCompany } = require("../middlewares/authentication");
// const uploadImage = require("../middlewares/cloudinary");
const uploadImagekit = require("../middlewares/imageKit");
const { multerSingleImg, multerMultiImage } = require("../middlewares/multer");

const middlewares = [multerMultiImage, uploadImagekit]
router.post("/register", middlewares, CompanyController.registerCompay);
router.post("/login", CompanyController.loginCompany);
router.post("/job", authenticationCompany, CompanyController.addJob);
router.get("/job", authenticationCompany, CompanyController.getAllJobById);

module.exports = router;
