const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	return array.reduce((total, item) => total + item, 0 );
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let array = [];
  for(let i = num; i > 0; i--){array.push(i);}
  return array.reduce((total, item) => total * item, 1);
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
