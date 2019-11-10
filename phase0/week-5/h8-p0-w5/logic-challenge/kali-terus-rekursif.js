function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angkaStr = angka.toString();
    var angkaLen = angkaStr.length;
    if (angkaLen === 1){
        return angka;
    } else {
        var angkaKali = angkaStr[0];
        for (var i=1; i<angkaLen; i++){
            angkaKali *= angkaStr[i];
        }
        return kaliTerusRekursif(angkaKali);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6