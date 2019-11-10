function cariModus(arr) {
    // you can only write your code here!

    // define variabel
    var obj = {};
    var objLen = 0;
    var arrOcc = [];

    // group the item by the number of item occurrences
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }

    // to find the object length
    for (var m in obj) {
        objLen++;
    }

    // if the obj value equals to 1 or length of arr then return -1
    if (objLen === 1 || objLen === arr.length) {
        return -1;
    }

    // set array of the item occurrences
    for (var j = 0; j < arr.length; j++) {
        arrOcc.push(obj[arr[j]]);
    }

    // comparing the arrOcc value to find the biggest number of occurrences
    var temp = 0;
    for (var k = 1; k < arrOcc.length; k++) {
        if (arrOcc[k] > arrOcc[tampung]) {
            temp = k;
        }
    }

    // return the result
    return arr[tampung];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1