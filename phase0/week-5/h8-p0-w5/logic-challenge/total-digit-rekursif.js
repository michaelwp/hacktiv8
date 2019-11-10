function totalDigitRekursif(angka) {
    var angkaStr = angka.toString();
    var angkaLen = angkaStr.split("").length;

    if (angkaLen === 1) {
        return angka;
    } else {
        return parseInt(angkaStr[0]) + (totalDigitRekursif(parseInt(angkaStr.slice(1))))
    }
}


// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5