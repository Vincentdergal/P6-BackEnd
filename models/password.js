const passwordValidator = require("password-validator");

// Create a schema
const passwordSchema = new passwordValidator();

// Add properties to it
passwordSchema
  .is()
  .min(6) // Minimum length 6
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd","Password123","123456","123456789","Qwerty","Password","12345","12345678","111111","1234567","123123","Qwerty123","1q2w3e","1234567890","DEFAULT","Abc123","654321","Qwertyuiop","Iloveyou"]); // Blacklist these values

module.exports = passwordSchema;