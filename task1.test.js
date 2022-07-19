const stringLength = require('./task1');

it("check if 'thomas' string return 6 for string length", () => {
  expect(stringLength('thomas')).toBe(6);
  throw new Error("string 'thomas' should return 6")
})

it("check if the string is has at least 1 character", () => {
 
  expect(stringLength('thomas')>0).toBe(true);
  throw new Error("string cannot be empty")
})

it("check if the string is no longer than 10 characters", () => {
 
  expect(stringLength('thomas')<=10).toBe(true);
  throw new Error("string cannot have more than 10 characters")
})