const errorHandler = (err, req, res, next) => {
  console.log(err.name);
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "COMPANY_NOT_FOUND":
      res.status(404).json({ message: "Company Not Found" });
      break;
    case "APPLICANT_NOT_FOUND":
      res.status(404).json({ message: "Applicant Not Found" });
      break;
    case "UNAUTHENTICATED":
      res.status(404).json({ message: "Please login first" });
      break;
    case "AUTHENTICATION":
      res.status(404).json({ message: "Invalid Email/Password" });
      break;

    default:
      res.status(500).json({ message: "internal server error" });
      break;
  }
};

module.exports = errorHandler;
