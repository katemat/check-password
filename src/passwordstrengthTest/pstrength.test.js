const checkPassword = require("./pstrength");

test("1 point for lowercase", () => {
  expect(checkPassword("pudding")).toEqual({
    score: 1,
    hasLowerCase: true,
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false,
  });
});

test("2 point for lowercase and uppercase", () => {
  expect(checkPassword("puDding")).toEqual({
    score: 2,
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false,
  });
});
test("3 points for lowercase and uppercase, number", () => {
  expect(checkPassword("puDing1")).toEqual({
    score: 3,
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false,
  });
});
test("4 points for lowercase and uppercase, number, non alphaNumeric", () => {
  expect(checkPassword("puDin1@")).toEqual({
    score: 4,
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: false,
    isOver12Char: false,
  });
});
test("5 points for lowercase and uppercase, number, non alphaNumeric, length more than 8 char", () => {
  expect(checkPassword("puDding1@")).toEqual({
    score: 5,
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: true,
    isOver12Char: false,
  });
});
test("6 points for lowercase and uppercase, number, non alphaNumeric, length more than 8 char and more than 12 char", () => {
  expect(checkPassword("cakepuDding1@")).toEqual({
    score: 6,
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: true,
    isOver12Char: true,
  });
});
