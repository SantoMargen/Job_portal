"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Apply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Apply.belongsTo(models.Applicant, { foreignKey: "applicantId" });
      Apply.belongsTo(models.Job, { foreignKey: "jobId" });
    }
  }
  Apply.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      jobId: DataTypes.INTEGER,
      applicantId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Apply",
    }
  );
  return Apply;
};
