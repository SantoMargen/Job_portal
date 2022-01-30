const errorHandler = (err, req, res, next) => {
  console.log(err.name);
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    // case "SequelizeForeignKeyConstraintError":
    // case "SequelizeDatabaseError":
    //   res.status(400).json({ message: "businessCategoryId is required" });
    //   break;

    default:
      res.status(500).json({ message: "internal server error" });
      break;
  }
};

module.exports = errorHandler;
