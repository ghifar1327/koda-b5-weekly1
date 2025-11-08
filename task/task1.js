const input = 'apa'
let palindrom = input === input.split('').reverse().join('') ? 'palindrom' : 'bukan palindrom'
console.log(palindrom)