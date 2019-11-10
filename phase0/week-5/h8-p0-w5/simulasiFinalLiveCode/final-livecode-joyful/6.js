/**
 * =====================
 * Hitung Char Recursive
 * =====================
 *
 * [Instruction]
 * Buatlah sebuah function dengan teknik recursive untuk menghitung berapa banyak kata yang memiliki
 * karakter sesuai query yang diberikan.
 *
 * [Example]
 * @words = ['satu', 'dua', 'tiga', 'empat', 'lima']
 * @query = 'at'
 * karena 'satu' dan 'empat' mengandung kata 'at' maka
 * @result = 2
 *
 * RULES
 * =====
 * 1. `Wajib menggunakan rekursif`
 * 2. Dilarang menambahkan parameter baru
 * 3. Dilarang membuat variable di luar function countCharRecursive
 * 4. Dilarang mengubah tipe data parameter
 * 5. `Tidak boleh menggunakan loop` (for, while, forEach, map, filter, reduce)
 */

function countCharRecursive(words, query) {
    // Write your code here
    var x = 1;
    if (words.length === 0) return 0;
    if (words.length === 1) {
        return x;
    } else {
        var strMatch = words[0].match(query);
        var sliceWords = words.slice(1);
        if (strMatch !== null) {
            return x + countCharRecursive(sliceWords, query);
        } else {
            return countCharRecursive(sliceWords, query);
        }
    }
}

console.log(countCharRecursive(['Anchor', 'classic', 'daring', 'eager', 'fearless'], 'ar')); // 2
console.log(countCharRecursive(['90125785123545', 'balonku ada 35', '1 tahun ada 52 minggu', '35-infinite-fox'], '35')); // 3
console.log(countCharRecursive(['Old', 'MacDonald', 'had', 'four', 'farms'], 'o')); // 2
console.log(countCharRecursive(['haha', 'haha', 'haha', 'haha', 'haha'], 'ha')); // 5
console.log(countCharRecursive([], 'z')); // 0