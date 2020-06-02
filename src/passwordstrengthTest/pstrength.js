function checkPassword(password) {
  let passwordStrength = {
    score: 0,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false,
  };

  const lowerCasePattern = /[a-z]/;
  const upperCasePattern = /[A-Z]/;
  const numberPatern = /\d/;
  const nonAlphaNumericPattern = /[\W_]+/;

  if (lowerCasePattern.test(password)) {
    passwordStrength.score += 1;
    passwordStrength.hasLowerCase = true;
  }

  if (upperCasePattern.test(password)) {
    passwordStrength.score += 1;
    passwordStrength.hasUpperCase = true;
  }

  if (numberPatern.test(password)) {
    passwordStrength.score += 1;
    passwordStrength.hasNumber = true;
  }

  if (nonAlphaNumericPattern.test(password)) {
    passwordStrength.score += 1;
    passwordStrength.hasNonAlphaNumeric = true;
  }

  if (password.length >= 8) {
    passwordStrength.score += 1;
    passwordStrength.isOver8Char = true;
  }

  if (password.length >= 12) {
    passwordStrength.score += 1;
    passwordStrength.isOver12Char = true;
  }

  return passwordStrength;
}

module.exports = checkPassword;
