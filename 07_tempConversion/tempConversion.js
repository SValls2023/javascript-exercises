const convertToCelsius = function(degreesF) {
  const celsius = 5*(Number(degreesF) - 32)/9;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(degreesC) {
  const fahrenheit = Number(degreesC)*(9/5)+32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
