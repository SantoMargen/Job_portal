"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report.belongsTo(models.Company, { foreignKey: "companyId" });
      Report.belongsTo(models.Job, { foreignKey: "jobId" });
    }
  }
  Report.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      companyId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "companyId is required",
          },
          notNull: {
            msg: "companyId is required",
          },
        },
      },
      jobId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "jobId is required",
          },
          notNull: {
            msg: "jobId is required",
          },
        },
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Status is required",
          },
          notNull: {
            msg: "Status is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Report",
    }
  );
  return Report;
};
