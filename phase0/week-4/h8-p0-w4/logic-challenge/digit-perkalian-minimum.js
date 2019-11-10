function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var arrFaktor = 0;
    var hasilBagi;
    for (var i = 1; i <= angka; i++) {
        if ((angka % i) === 0) {
            hasilBagi = (angka / i);
            var con = hasilBagi.toString() + i.toString();
            if (arrFaktor > 0){
                if (con.length < arrFaktor){
                    arrFaktor = con.length;
                }
            } else {
                arrFaktor = con.length;
            }
        }
    }

    return arrFaktor; //.sort()[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2