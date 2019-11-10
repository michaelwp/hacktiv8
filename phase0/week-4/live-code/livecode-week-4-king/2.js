/**
 * =====================
 * HITUNG GAJI KARYAWAN
 * =====================
 * 
 * [Deskripsi]:
 * Sebuah fungsi yang akan mengembalikan jumlah gaji yang akan diterima karyawan.
 * Dimana karyawan juga akan mendapatkan bonus maksimal 300.000.
 * Namun, jika jumlah tidak kehadiran karyawan kurang dari 70% maka
 * karyawan tidak akan mendapatkan bonus atau hanya mendapatkan gaji pokok saja.
 * 
 * - Absensi berupa array yang berisi angka 1 dan 0.
 * - Dimana 1 berarti karyawan hadir di kantor dan 0 berarti karyawan tidak hadir di kantor.
 * - Perhitungan bonus berupa 300.000 * (persen kehadiran)
 * - Total gaji berupa gaji pokok + bonus (jika ada)
 * 
 * [Rules]:
 * 1. tidak boleh menggunakan built in function apapun.
 * 2. Function menerima parameter nama, bonus, absensi dan gaji pokok karyawan
 * 3. Output harus sesuai dengan contoh yang telah diberikan
*/

function hitungGaji(nama, absensi, gajiPokok) {
  // Write your code here
    var total_hadir = 0;
    var persen_hadir;
    var total_gaji;
    var bonus = 300000;

    for (var i=0; i < absensi.length; i++){
        if (absensi[i] === 1){
            total_hadir ++;
        }
    }

    persen_hadir = (total_hadir/absensi.length)*100;

    if (persen_hadir < 70){
        total_gaji = gajiPokok;
    } else {
        total_gaji = (bonus * (persen_hadir/100)) + gajiPokok;
    }

    return "Total gaji " + nama + " adalah " + total_gaji;
}

var absensiFirst = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
console.log(hitungGaji('Hannah', absensiFirst, 3000000))
// Total gaji Hannah adalah Rp 3250000

var absensiSecond = [0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0]
console.log(hitungGaji('Yuki', absensiSecond, 6000000))
// Total gaji Yuki adalah Rp 6000000