const celciusToFahenheit = (num) => {
  let cToF = (num * 9) / 5 + 32
  return `${num} celcius sama dengan ${cToF} fahrenheit`
};
const fahrenheitTocelcius = (num) => {
  let fToC = (num -32) * 5/9 
  return `${num} fahrenheit sama dengan ${fToC} celcius`;
};

console.log(celciusToFahenheit(20))
console.log(fahrenheitTocelcius(77))