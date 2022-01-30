"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Applicant.belongsToMany(models.Job, {
        through: models.Apply,
        foreignKey: "applicantId",
      });
    }
  }
  Applicant.init(
    {
      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Full Name is required",
          },
          notNull: {
            msg: "Full Name is required",
          },
        },
      },
      email: {
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
            msg: "Must be Email Format",
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Password is required",
          },
          notNull: {
            msg: "Password is required",
          },
          len: {
            args: [6],
            msg: "minimum 6 character",
          },
        },
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Phone Number is required",
          },
          notNull: {
            msg: "Phone Number is required",
          },
        },
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Address is required",
          },
          notNull: {
            msg: "Address is required",
          },
        },
      },
      skills: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Skills is required",
          },
          notNull: {
            msg: "Skills is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Applicant",
    }
  );
  return Applicant;
};
