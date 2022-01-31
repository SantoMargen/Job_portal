const { Applicant } = require("../models");

class ApplicantController {
  static async registerApplicant(req, res, next) {
    try {
      const { fullName, email, password, phoneNumber, address, skills } =
        req.body;
      const payload = {
        fullName,
        email,
        password,
        phoneNumber,
        address,
        skills,
      };
      const newApplicant = await Applicant.create(payload);
      res.status(201).json({
        id: newApplicant.id,
        fullName: newApplicant.fullName,
        email: newApplicant.email,
        phoneNumber: newApplicant.phoneNumber,
        address: newApplicant.address,
        skills: newApplicant.skills,
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = ApplicantController;
