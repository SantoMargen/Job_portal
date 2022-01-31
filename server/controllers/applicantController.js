const { Applicant } = require("../models");
const { createToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

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
  static async loginApplicant(req, res, next) {
    try {
      const { email, password } = req.body;
      const foundApplicant = await Applicant.findOne({
        where: { email },
      });
      if (
        !foundApplicant ||
        !comparePassword(password, foundApplicant.password)
      ) {
        throw { name: "APPLICANT_NOT_FOUND" };
      }
      const payload = {
        id: foundApplicant.id,
        fullName: foundApplicant.fullName,
        email: foundApplicant.email,
      };
      const token = createToken(payload);

      res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = ApplicantController;
