let input = 5

function run(n) {
  return new Promise((resolve, reject) => {
    if (typeof n !== "number" || n <= 0) {
      reject("invalid : input harus lebih besar dari nol dan bertipe data number!");
      return;
    }
    let i = 1;
    let timer = setInterval(() => {
      console.log(i);
      if (i === input) {
        clearInterval(timer);
        resolve("selesai");
      }
      i++;  
    }, 1000);
  });
}

run(input)
  .then(console.log)
  .catch(console.log);

// async function running() {
//     try {
//         let res = await run(input)
//         console.log(res)
//     }catch{
//         console.error
//     }
// }

// running()