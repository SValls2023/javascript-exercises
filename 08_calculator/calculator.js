const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let sum = 0;
	for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  return product
};

const power = function(base, exponent) {
  let solution = base;
	for (let i = 1; i < exponent; i++) {
    console.log(base);
    solution *= base;
  }
  return solution;
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = n;
	for (let i = n-1; i > 0; i--) {
    product *= i;
  }
  return product;
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
