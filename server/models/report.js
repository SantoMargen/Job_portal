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
      Report.belongsTo(models.Applicant, { foreignKey: "applicantId" });
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
      },
      jobId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      applicantId: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
