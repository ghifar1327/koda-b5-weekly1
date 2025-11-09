let input = 20;

const konversiSuhu = (num, toCelsius, toFahrenheit, toKelvin, toReamur) => {
  const arr = [toCelsius(num), toFahrenheit(num), toKelvin(num), toReamur(num)];
  return arr;
};
const celcius = (num) => {
  console.log(`celcius = ${num}`);
};
const fahrenheit = (num) => {
  console.log(`fahrenheit = ${(num * 9) / 5}`);
};
const kelvin = (num) => {
  console.log(`kelvin = ${num + 273.15}`);
};
const reamur = (num) => {
  console.log(`reamur = ${(num * 4) / 5}`);
};

konversiSuhu(input, celcius, fahrenheit, kelvin, reamur)
