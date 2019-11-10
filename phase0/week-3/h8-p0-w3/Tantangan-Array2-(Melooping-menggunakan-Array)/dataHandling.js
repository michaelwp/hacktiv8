function dataHandling(input) {
    for (var n = 0; n < input.length; n++) {
        console.log("Nomor ID:", input[n][0]);
        console.log("Nama Lengkap:", input[n][1]);
        console.log("TTL:", input[n][2], input[n][3]);
        console.log("Hobi:", input[n][4]);
        console.log("");
    }
}

//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

dataHandling(input);
