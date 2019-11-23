'use strict';

function createMatrix(jumlahRow, jumlahCol) {
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

function createSmallMatrix(matrix) {
    // YOUR CODE HERE
    let countVowels = 0;
    for (let m = 0; m < (matrix.length - 1); m++) {
        for (let c = 0; c < (matrix[m].length - 1); c++) {
            const arr = [];
            arr.push(matrix[m][c], matrix[m][c + 1], matrix[m + 1][c], matrix[m + 1][c + 1]);
            if (checkVowels(arr)) {
                countVowels++;
            }
        }
    }
    return `Total : ${countVowels}`;
}

function checkVowels(matrix) {
    // YOUR CODE HERE
    const vowels = ["a", "i", "u", "e", "o"];
    let countVowels = 0;
    for (let m = 0; m < matrix.length; m++) {
        for (let v = 0; v < vowels.length; v++) {
            if (matrix[m] === vowels[v]) {
                countVowels++
            }
        }
    }
    let res = countVowels === matrix.length;
    if (res) {
        console.log(matrix)
    }
    return res
}

const matrixData = createMatrix(5, 4);

// const matrixData = [
//     ['X', 'u', 'a', 'i'],
//     ['X', 'e', 'u', 'e'],
//     ['X', 'X', 'X', 'X'],
//     ['X', 'X', 'X', 'X'],
//     ['X', 'X', 'X', 'x']
// ];
// console.log(matrixData);
console.log(createSmallMatrix(matrixData));