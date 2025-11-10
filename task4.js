/**  1. toLowerCase()
 * untuk merubah semua huruf alfabet besar menjadi kecil pada string
 * */
let nama = "Muhammad GHIFAR Randhani";
console.log(
  `1. toLowerCase()\ninput: ${nama}\noutput: ${nama.toLowerCase()}\n`
);

/**
 * 2. toUpperCase()
 * untuk merubah semua huruf alfabet kecil menjadi besar pada tipe data string
 */
console.log(
  `2. toUpperCase()\ninput: ${nama}\noutput: ${nama.toUpperCase()}\n`
);

/**
 * 3. reverse()
 * untuk mengembalikan posisi array, dengan index array pertama menjadi akhir dan index akhir menjadi ung pertama
 */
const arr = [0, 1, 2, 3];
console.log(`3. reverse()\ninput: ${arr}\noutput: ${arr.reverse()}\n`);

/** 4. slice()
 * untuk menegmbalikan salinan dari sebeagian array ke object array baru, yang di pilih dari start sampai end(tidak termasuk), start dan end mewakili index pada array, array asli tidak akan berubah
 */
const arr2 = [1, 2, 3, 4, 5];
console.log(`4. slice()\ninput: ${arr2}\noutput:`, arr2.slice(1, 4));

/** 5. split()
 * memecah string menjadi array berdasarka separator/pemisah yang ingin ditentukan
 */
console.log(`\n 1. split()\ninput: ${nama}\noutput:`, nama.split(" "));
