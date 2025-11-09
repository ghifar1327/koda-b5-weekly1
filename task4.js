/**  1. toLowerCase()
 * untuk merubah semua huruf alfabet besar menjadi kecil pada string  
 * */
let nama = 'Muhammad GHIFAR Randhani'
console.log(`1. toLowerCase()\ninput: ${nama}\noutput: ${nama.toLowerCase()}\n`)

/**
 * 2. toUpperCase()
 * untuk merubah semua huruf alfabet kecil menjadi besar pada tipe data string  
 */
console.log(`2. toUpperCase()\ninput: ${nama}\noutput: ${nama.toUpperCase()}\n`)

/**
 * 3. parseInt()
 * untuk merubah angka yang bertipe data string menjadi bilangan bulat bertipe data number
 */
const num = '123.4'
console.log(`3. parseInt()\ninput: ${num}\noutput: ${parseInt(num)}\n`)

/** 4. parseFloat()
 * untuk merubah bilangan desimal yang bertipe data string menjadi tipe data number
 */
console.log(`4. parseFloat()\ninput: ${num}\noutput: ${parseFloat(num)}\n`)

/** 5. split()
 * memecah string menjadi array berdasarka separator/pemisah yang ingin ditentukan
 */
console.log(`1. split()\ninput: ${nama}\noutput:`, nama.split(' '))