function pasanganTerbesar(num) {
    // you can only write your code here!
    max_num = [];

    for (var i = 0; i < (num.toString().length-1); i++){
         max_num.push(parseInt(num.toString().substr(i,2)));
    }
    return (max_num.sort()[max_num.length-1]);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99