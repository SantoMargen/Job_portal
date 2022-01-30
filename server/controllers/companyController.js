const { Company } = require("../models");

class CompanyController {
  static async registerCompay(req, res, next) {
    try {
      const { companyName, emailCompany, password, about, businessCategoryId } =
        req.body;
      const payload = {
        companyName,
        emailCompany,
        password,
        about,
        businessCategoryId: +businessCategoryId,
      };
      const newCompany = await Company.create(payload);
      res.status(201).json({
        id: newCompany.id,
        email: newCompany.emailCompany,
        companyName: newCompany.companyName,
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = CompanyController;
