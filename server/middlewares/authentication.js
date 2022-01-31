const { Company, Applicant } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const authenticationCompany = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "UNAUTHENTICATED" };
    }
    const payload = verifyToken(access_token);
    const foundCompany = await Company.findOne({
      where: { id: payload.id, emailCompany: payload.email },
    });
    if (!foundCompany) {
      throw { name: "AUTHENTICATION" };
    }
    req.company = {
      id: foundCompany.id,
      name: foundCompany.companyName,
      email: foundCompany.emailCompany,
    };

    next();
  } catch (err) {
    next(err);
  }
};
const authenticationApplicant = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "UNAUTHENTICATED" };
    }
    const payload = verifyToken(access_token);
    const foundApplicant = await Applicant.findOne({
      where: { id: payload.id },
    });
    if (!foundApplicant) {
      throw { name: "AUTHENTICATION" };
    }
    req.applicant = {
      id: foundApplicant.id,
      fullName: foundApplicant.fullName,
      email: foundApplicant.email,
    };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authenticationCompany,
  authenticationApplicant,
};
