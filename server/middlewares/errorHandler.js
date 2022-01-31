const errorHandler = (err, req, res, next) => {
  console.log(err.name);
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "COMPANY_NOT_FOUND":
      res.status(400).json({ message: "Email/Password is required" });
      break;
    case "INVAID_DATA_COMPANY":
    case "APPLICANT_NOT_FOUND":
      res.status(400).json({ message: "Invalid Email/Password" });
      break;
    case "UNAUTHENTICATED":
      res.status(401).json({ message: "Please login first" });
      break;
    case "AUTHENTICATION":
      res.status(401).json({ message: "Invalid Email/Password" });
      break;
    case "JOB_NOT_FOUND":
      res.status(404).json({ message: "Job Not Found" });
      break;
    case "APPLY_NOT_FOUND":
      res.status(404).json({ message: "Apply Job Not Found" });
      break;

    default:
      res.status(500).json({ message: "internal server error" });
      break;
  }
};

module.exports = errorHandler;
