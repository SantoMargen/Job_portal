const express = require('express');
const router = express.Router();
const company = require('./company');
const applicant = require('./applicant');
const errorHandler = require('../middlewares/errorHandler');
const ApplicantController = require('../controllers/applicantController');

router.use('/company', company);
router.use('/applicant', applicant);
router.get('/jobs', ApplicantController.getAllJobs);

router.use(errorHandler);
module.exports = router;
