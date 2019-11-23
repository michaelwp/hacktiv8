function moneyCoins(input) {
    const pecahan = [
        1, 10, 20, 50, 100,
        200, 500, 1000,
        2000, 5000, 10000
    ];

    let res = [];
    while (input > 0) {
        for (let i = 0; i < pecahan.length; i++) {
            if (pecahan[i] > input) {
                res.push(pecahan[i - 1]);
                input -= pecahan[i - 1];
                break;
            } else if (input > pecahan[pecahan.length - 1]) {
                res.push(pecahan[pecahan.length - 1]);
                input -= pecahan[pecahan.length - 1];
            }
        }
    }
    return res;
}

console.log(moneyCoins(543));
console.log(moneyCoins(7752));
console.log(moneyCoins(37454));
