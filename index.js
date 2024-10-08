const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

//task1
const temperaturesAbove25 = temperatures.filter((t) => t >= 25);
console.log(temperaturesAbove25);

//task2
const temperaturesbelow20 = temperatures.filter((t) => t < 20);
console.log(temperaturesbelow20);

//task3
const temperaturesInF = temperatures.map((t) => (t * 9) / 5 + 32);
console.log(temperaturesInF);

const temperatureLabels = temperatures.map((t) => {
  if (t >= 25) return "Warm";
  if (t > 20) return "Mild";
  return "Cool";
});
console.log(temperatureLabels);

//task5
const maxTemp = temperatures.reduce((max, temperature) => {
  if (max < temperature) return temperature;
  return max;
}, -Infinity);

console.log(maxTemp);

//task6
const lowTemp = temperatures.reduce((low, temperature) => {
  if (low > temperature) return temperature;
  return low;
}, Infinity);

console.log(lowTemp);
