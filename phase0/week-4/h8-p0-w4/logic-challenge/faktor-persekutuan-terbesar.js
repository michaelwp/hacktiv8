function fpb(angka1, angka2) {
    // you can only write your code here!
    var faktor;
    var angka_limit;

    if (angka1 > angka2){
        angka_limit = angka2;
    } else {
        angka_limit = angka1;
    }

    for (var i=1; i<angka_limit; i++){
        if ((angka1 % i===0) && (angka2 % i===0)){
            faktor = i;
        }
    }
    return faktor;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1