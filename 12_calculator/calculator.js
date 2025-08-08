const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
};

const power = function (num1, num2) {
  let result = 1;
  for (let i = 1; i <= num2; i++) {
    result *= num1;
  }
  return result;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
