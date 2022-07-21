const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { Company, Job, Report, Category } = require("../models");

class CompanyController {
  static async registerCompay(req, res, next) {
    try {
      console.log(req.body.imageUrls);

      // const {
      //   companyName,
      //   emailCompany,
      //   password,
      //   imageUrls
      //   about,
      //   businessCategoryId,
      // } = req.body;
      // const payload = {
      //   companyName,
      //   emailCompany,
      //   password,
      //   logo,
      //   about,
      //   businessCategoryId: +businessCategoryId,
      // };
      // const newCompany = await Company.create(payload);
      // res.status(201).json({
      //   id: newCompany.id,
      //   email: newCompany.emailCompany,
      //   companyName: newCompany.companyName,
      // });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async loginCompany(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "COMPANY_NOT_FOUND" };
      }
      const foundCompany = await Company.findOne({
        where: {
          emailCompany: email,
        },
      });
      if (!foundCompany || !comparePassword(password, foundCompany.password)) {
        throw { name: "INVAID_DATA_COMPANY" };
      }

      const payload = {
        id: foundCompany.id,
        name: foundCompany.companyName,
        email: foundCompany.emailCompany,
      };
      const token = createToken(payload);

      res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
  static async addJob(req, res, next) {
    try {
      const { id: companyId } = req.company;
      const { tittle, requirement, jobDescription, salary } = req.body;
      const payload = {
        tittle,
        requirement,
        isActive: true,
        jobDescription,
        salary,
      };
      const newjob = await Job.create(payload);
      if (newjob) {
        await Report.create({
          companyId: companyId,
          jobId: newjob.id,
          status: "Active",
        });
      }
      res.status(201).json(newjob);
    } catch (err) {
      next(err);
    }
  }
  static async getAllJobById(req, res, next) {
    try {
      const { id } = req.company;
      const jobByCompany = await Report.findAll({
        where: {
          companyId: id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "companyId", "jobId"],
        },
        include: [
          {
            model: Company,
            attributes: {
              exclude: [
                "id",
                "createdAt",
                "updatedAt",
                "password",
                "businessCategoryId",
              ],
            },
            include: [
              {
                model: Category,
                attributes: ["name"],
              },
            ],
          },
          {
            model: Job,
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
          },
        ],
      });
      res.status(200).json(jobByCompany);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = CompanyController;
