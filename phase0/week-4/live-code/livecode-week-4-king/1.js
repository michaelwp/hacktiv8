/**
 * ============
 * Alone Number
 * ============
 *
 * [Description]
 * 1. notAlone merupakan sebuah function yang merubah angka yang 'sendirian' menjadi asterisk ('*')
 *    dan me-return array baru berisi set angka (plus asterisk jika ada) yang sudah berubah.
 * 2. Angka yang 'sendirian' merupakan angka yang tidak punya pasangan dengan angka itu sendiri.
 *
 * [Example]
 * 1. Angka 2 dalam array [1, 2, 3] merupakan angka sendirian karena tidak memiliki angka 2 lain,
 *    maka @output = [1, '*', 3]
 *
 * 2. Angka 2 dalam array [1, 2, 3, 2, 2, 5, 2] semuanya memiliki pasangan:
 *    [
 *      1,
 *      2, => pasangan 1
 *      3,
 *      2, => pasangan 1
 *      2, => pasangan 2
 *      5,
 *      2  => pasangan 2
 *    ]
 *    karena semua angka 2 memiliki pasangan maka array tidak berubah, sehingga:
 *    @output = [1, 2, 3, 2, 2, 5, 2]
 *
 * 3. Angka 3 terakhir dalam [3, 3, 3, 4] sendirian karena hanya terdapat 1 pasangan,
 *    yaitu 3 di indeks 0 dan 1, maka:
 *    @output = [3, 3, '*', 4]
 *
 * [Rules]
 * 1. Dilarang menggunakan built-in functions: indexOf, lastIndexOf, split, slice, splice, join,
 *    forEach, map, filter, reduce.
 * 2. Dilarang menggunakan regex.
 * 3. `WAJIB` menambahkan pseudocode atau nilai -50.
 */

/**
 * START
 * DEFINE arr as an array with number
 * DEFINE loneNum as an alone number
 * DEFINE target_num as an empty array
 * DEFINE i as 0
 *
 * FOR i LESS THEN arr DO INCREMENT i BY 1
 *      IF arr OF i EQUALS TO loneNum THEN
 *          target_num ADD VALUE OF i
 *      END IF
 * END FOR
 *
 * IF LENGTH OF target_num MOD 2 NOT EQUALS TO 0 THEN
 *      arr OF target_num INDEX OF ITEM EQUALS TO LENGTH OF target_num MINUS 1
 * END IF
 *
 * DISPLAY arr
 * END
 */

function alone(arr, loneNum) {
    // Write your code here
    var target_num = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === loneNum) {
            target_num.push(i);
        }
    }

    if ((target_num.length % 2) !== 0) {
        arr[target_num[target_num.length - 1]] = "*";
    }

    return arr;
}

console.log(alone([1, 2, 1, 4, 1], 1))
// [ 1, 2, 1, 4, '*' ]

console.log(alone([3, 4, 6, 3, 4, 2, 3, 4], 3))
// [ 3, 4, 6, 3, 4, 2, '*', 4 ]

console.log(alone([5, 6, 8, 2, 7, 8, 6, 8, 5, 8, 6], 8))
// [ 5, 6, 8, 2, 7, 8, 6, 8, 5, 8, 6 ]

console.log(alone([5, 5, 5, 9, 1, 8, 2, 1, 8, 6], 5))
// [ 5, 5, '*', 9, 1, 8, 2, 1, 8, 6 ]