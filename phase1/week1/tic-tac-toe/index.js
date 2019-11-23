'use strict';

function ticTacToe() {
    // YOUR CODE HERE
    const matrix = [];
    const markCount = {X: 0, O: 0};
    const markSign = {0: "O", 1: "X"};

    for (let r = 0; r < 3; r++) {
        const arr = [];
        for (let c = 0; c < 3; c++) {
            let markCode = Math.round(Math.random());
            let mark;
            if (markCount[markSign[markCode]] < 5) {
                markCount[markSign[markCode]]++;
                mark = markSign[markCode];
            } else {
                if (markCode === 1){
                    mark = markSign[0];
                } else {
                    mark = markSign[1];
                }
            }
            arr.push(mark)
        }
        matrix.push(arr);
    }
    return matrix
}

console.log(ticTacToe());
