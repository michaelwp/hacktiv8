'use strict';

function generatedBoard(baseMatrix) {
    let num = 100;
    const board = [];
    for (let i = 0; i < baseMatrix; i++) {
        const floor = [];
        for (let j = 1; j <= baseMatrix; j++) {
            if (i % 2 !== 0) {
                floor.push(num-(baseMatrix-j));
            } else {
                floor.push(num--);
            }
        }

        if (i % 2 !== 0) {
            num -= baseMatrix;
        }

        board.push(floor);
    }
    return board;
}

console.log(generatedBoard(10));