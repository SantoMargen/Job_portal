const {
  Applicant,
  Job,
  Company,
  Report,
  Apply,
  Category,
} = require("../models");
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
      if (!email || !password) {
        throw { name: "APPLICANT_NOT_FOUND" };
      }
      const foundApplicant = await Applicant.findOne({
        where: { email: email },
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
  static async getAllJobs(req, res, next) {
    try {
      const allJob = await Job.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Company,
            attributes: ["companyName", "logo", "about"],
          },
        ],
      });
      res.status(200).json(allJob);
    } catch (err) {
      next(err);
    }
  }
  static async applyJob(req, res, next) {
    try {
      const id = Number(req.params.jobId);
      const { id: applicantId } = req.applicant;
      if (!id) {
        throw { name: "JOB_NOT_FOUND" };
      }
      const job = await Job.findByPk(id, {
        include: [
          {
            model: Company,
            attributes: ["id"],
          },
        ],
      });
      if (!job) {
        throw { name: "JOB_NOT_FOUND" };
      }
      const payload = {
        jobId: id,
        applicantId,
        companyId: job.Companies[0].id,
        status: "Applied",
      };
      const jobApply = await Apply.create(payload);
      res.status(201).json({
        id: jobApply,
        applicantId: jobApply.applicantId,
        companyId: jobApply.companyId,
        status: jobApply.status,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getAllApplied(req, res, next) {
    try {
      const { id: applicantId } = req.applicant;
      const allApplied = await Apply.findAll({
        where: { applicantId },
        attributes: ["id", "status"],
        include: [
          {
            model: Company,
            attributes: ["companyName", "emailCompany", "logo", "about"],
          },
          {
            model: Job,
            attributes: {
              exclude: ["createdAt", "updatedAt", "id"],
            },
          },
        ],
      });
      res.status(200).json(allApplied);
    } catch (err) {
      next(err);
    }
  }
  static async getApplyByDetail(req, res, next) {
    try {
      const id = Number(req.params.appliedId);
      if (!id) {
        throw { name: "APPLY_NOT_FOUND" };
      }
      const applyJob = await Apply.findByPk(id, {
        attributes: ["id", "status"],
        include: [
          {
            model: Job,
            attributes: { exclude: ["createdAt", "updatedAt", "id"] },
          },
          {
            model: Company,
            attributes: {
              exclude: ["createdAt", "updatedAt", "id", "businessCategoryId"],
            },
            include: [
              {
                model: Category,
                attributes: ["name"],
              },
            ],
          },
        ],
      });
      if (!applyJob) {
        throw { name: "APPLY_NOT_FOUND" };
      }

      res.status(200).json(applyJob);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = ApplicantController;
