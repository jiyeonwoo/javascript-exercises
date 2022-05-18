const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
  return input.reduce((a, b) => add(a, b), 0);
};

const multiply = function(input) {
  return input.reduce((a, b) => a*b, 1);
};

const power = function(a, power) {
  let out = 1;
  for (let i = 0; i < power; i++) {
    out *= a;
  }
  return out;
};

const factorial = function(a) {
	let out = 1;
  for (let i = 1; i < a+1; i++) {
    out *= i;
  }
  return out;
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
