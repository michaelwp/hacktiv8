/**
 * ===============
 * Multiple Of Sum
 * ===============
 * Input : @data -> array of deret angka
 *         @divider -> angka pembagi
 * Deskripsi : Menjumlahkan satu per satu angka yang ada dalam 1 deret angka dan mencari tahu
 *             apakah hasil penjumlahan tersebut habis dibagi divider yang ditentukan.
 *             Data deret angka akan diberikan berupa array. Dan outputnya adalah array of boolean
 *             yang menyatakan deret angka mana saja yang habis dibagi divider yang ditentukan.
 * 
 * Contoh 1 : multipleOfSum([123], 3)
 *            -> deret angka nya : 123, maka kita jumlahkan dengan cara 1 + 2 + 3 = 6
 *            -> setelahnya kita cari tau apakah angka hasil di atas ( 6 ) habis dibagi divider ( 3 )
 *            -> 6 habis dibagi 3, oleh karena itu, untuk deret angka 123 outputnya adalah [ true ]
 * 
 * Contoh 2 : multipleOfSum([41], 9)
 *            -> deret angka nya : 41, maka kita jumlahkan dengan cara 4 + 1 = 5
 *            -> setelahnya kita cari tau apakah angka hasil di atas ( 5 ) habis dibagi divider ( 9 )
 *            -> 5 tidak habis dibagi 9, oleh karena itu, untuk deret angka 41 outputnya adalah [ false ]
 * 
 * Data input dapat `berupa array kosong`, dan output nya adalah []
 * Data input dapat `berisi lebih dari 1 deret angka`, maka outputnya adalah
 * `array of boolean` sejumlah data yang di input.
 * 
 * RULES !!!
 * 1. Perhatikan Driver Code untuk contoh lebih lengkap
 * 2. Hanya boleh menggunakan built in function .push dan .unshift
 */

// VERSI NON REKURSIF
function multipleOfSum(data, divider) {
  // Write your code here
}

// DRIVER CODE
console.log(multipleOfSum([5], 4)); // [ false ]
console.log(multipleOfSum([18, 45, 36], 9)); // [ true, true, true ]
console.log(multipleOfSum([18, 105, 35], 9)); // [ true, false, false ]
console.log(multipleOfSum([], 4)); // []