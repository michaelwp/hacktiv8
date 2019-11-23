function toRoman(input) {
    const tabel = [
        ['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10],
        ['XL', 40], ['L', 50], ['XC', 90], ['C', 100], ['CD', 400],
        ['D', 500], ['CM', 900], ['M', 1000]

    ];

    let res = "";
    while (input > 0) {
        for (let i = 0; i < tabel.length; i++) {
            if (tabel[i][1] > input) {
                res += tabel[i - 1][0];
                input -= tabel[i - 1][1];
                break;
            } else if (tabel[i][1] === input) {
                res += tabel[i][0];
                input -= tabel[i][1];
                break;
            } else if (input > tabel[tabel.length - 1][1]) {
                res += tabel[tabel.length - 1][0];
                input -= tabel[tabel.length - 1][1];
            }
        }
    }
    return res;
}

console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("----- | -------- | ------");
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLIII  |', toRoman(1453));
console.log('1646  | MDCXLVI  |', toRoman(1646));