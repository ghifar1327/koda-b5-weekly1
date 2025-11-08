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

// let konversiSuhu = [celcius(), fahrenheit(), kelvin(), reamur()];
// konversiSuhu.forEach((e) => {
//     console.log(e)
// });

// function processNumber(number, process1, process2) {
//   let out1 = process1(number);
//   // process2 akan mengolah output dari process1
//   let out2 = process2(out1);
//   // tampilkan output dari process2
//   console.log(out2);
// }
// function double(num) {
//   const result = num * 2;
//   return result;
// }
// function square(num) {
//   const result = num * num;
//   return result;
// }
// processNumber(5, double, square);
// processNumber(
//   5,
//   (num) => {
//     return num * 2;
//   },
//   (num) => num * num
// );
