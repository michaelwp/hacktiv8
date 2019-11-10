function targetTerdekat(arr) {
    // you can only write your code here!
    var x = arr.indexOf("x");
    var o = arr.indexOf("o");
    var res = [];

    if (x < 0 || o < 0){
        return 0;
    }

    for (var i=0; i < arr.length; i++){
        if (arr[i] === "x"){
            if (i > o){
                res.push(i - o);
            } else {
                res.push(o - i);
            }
        }
    }

    return res.sort()[0];
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2