// import React from "react";

function PasswordStrength(password = "") {
  let score = 0;

  if (/[a-z]/.test(password)) {
    score += 1;
  }

  if (/[A-Z]/.test(password)) {
    score += 1;
  }

  if (/\d/.test(password)) {
    score += 1;
  }

  if (/[\W_]+/.test(password)) {
    score += 1;
  }

  if (password.length >= 8) {
    score += 1;
  }

  if (password.length >= 12) {
    score += 1;
  }

  return score;
}

export default PasswordStrength;
