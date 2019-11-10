function xo(str) {
    // you can only write your code here!
    var x = (str.split("x").length)-1;
    var o = (str.split("o").length)-1;
    return (x === o);
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true