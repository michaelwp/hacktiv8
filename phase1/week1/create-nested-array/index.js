'use strict';

function createNestedArray(jumlahRow, jumlahCol) {
    // YOUR CODE HERE
    const matrix = [];
    for (let r = 0; r < jumlahRow; r++) {
        const arr = [];
        for (let c = 0; c < jumlahCol; c++) {
            let charCode = Math.round(Math.random() * 25);
            arr.push(
                String.fromCharCode(charCode + 97)
            )
        }
        matrix.push(arr);
    }
    return matrix
}

console.log(createNestedArray(5, 3));
console.log(createNestedArray(4, 2));