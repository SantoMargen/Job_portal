"use strict";
const { Model } = require("sequelize");
const { hashingPaswword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.belongsTo(models.Category, { foreignKey: "businessCategoryId" });
      Company.belongsToMany(models.Job, {
        through: models.Report,
        foreignKey: "companyId",
      });
    }
  }
  Company.init(
    {
      companyName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Company Name is required",
          },
          notNull: {
            msg: "Company Name is required",
          },
        },
      },
      emailCompany: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Email is required",
          },
          notNull: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Must be Email Formate",
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "password is required",
          },
          notNull: {
            msg: "password is required",
          },
        },
      },
      logo: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "logo is required",
          },
          notNull: {
            msg: "logo is required",
          },
          isUrl: {
            msg: "Must be URL formate",
          },
        },
      },
      about: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            msg: "About is required",
          },
          notNull: {
            msg: "About is required",
          },
        },
      },
      businessCategoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "businessCategoryId is required",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (company) => {
          company.password = hashingPaswword(company.password);
        },
      },
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
