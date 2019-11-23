// Your code here
'use strict';

const board = [];
const shipsTable = {
    "Aircraft carrier": {
        no: 1,
        size: 5,
        pos: []
    },
    "Battleship": {
        no: 2,
        size: 4,
        pos: []

    },
    "Cruiser": {
        no: 3,
        size: 3,
        pos: []
    },
    "Destroyer": {
        no: 4,
        size: 2,
        pos: []
    },
};

const abjad = {
    A: 1, B: 2, C: 3, D: 4, E: 5,
    F: 6, G: 7, H: 8, I: 9, J: 10,
};

const destroyShipsArray = [];

function start() {
    const arrayCoord = (process.argv).slice(2);

    createBoard();
    for (let ship in shipsTable) {
        while (shipsTable[ship].pos.length < shipsTable[ship].size) {
            createShip(ship, shipsTable[ship].size);
        }
    }
    assignShipPosition();
    attack(arrayCoord);
    printBoard();
}

function attack(coord) {
    for (let i = 0; i < coord.length; i++) {
        bomChecking(abjad[coord[i][0]], coord[i][1]);
    }
}

function createShip(ship, size) {
    let y = Math.floor(Math.random() * 10);
    let x = Math.floor(Math.random() * 10);

    for (let i = 0; i < size; i++) {
        if ((x + size) < 11) {
            let coord = `${(y + 1)},${x + i + 1}`;
            if (shipCrashValidation(coord)) {
                shipsTable[ship].pos.push(coord);
            } else {
                shipsTable[ship].pos = [];
                createShip(ship, size)
            }
        } else if ((y + size) < 11) {
            let coord = `${(y + i + 1)},${x + 1}`;
            if (shipCrashValidation(coord)) {
                shipsTable[ship].pos.push(coord);
            } else {
                shipsTable[ship].pos = [];
                createShip(ship, size)
            }
        }

    }
}

function shipCrashValidation(coord) {
    for (let ship in shipsTable) {
        let shipPosLen = shipsTable[ship].pos.length;
        for (let i = 0; i < shipPosLen; i++) {
            let shipPos = shipsTable[ship].pos[i];
            if (coord === shipPos) {
                return false;
            }
        }
    }
    return true
}

function assignShipPosition() {
    for (let ship in shipsTable) {
        let shipPosLen = shipsTable[ship].size;
        for (let i = 0; i < shipPosLen; i++) {
            let shipPos = shipsTable[ship].pos[i].split(",");
            board[shipPos[0]][shipPos[1]] = ship[0]; // shipsTable[ship].no
        }
    }
}

function bomChecking(x, y) {
    let coordBom = `${(y)},${x}`;

    if (board[y][x] === " ") {
        board[y][x] = "/";
        return
    }

    for (let ship in shipsTable) {
        let shipPosLen = shipsTable[ship].pos.length;
        for (let i = 0; i < shipPosLen; i++) {
            let shipPos = shipsTable[ship].pos[i];
            if (coordBom === shipPos) {
                destroyShip(ship)
            }
        }
    }
}

function destroyShip(ship) {
    let shipPosLen = shipsTable[ship].pos.length;
    for (let i = 0; i < shipPosLen; i++) {
        let shipPos = shipsTable[ship].pos[i].split(",");
        board[shipPos[0]][shipPos[1]] = "X";
    }
    destroyShipsArray.push(ship);
}

function createBoard() {
    const coordX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (let i = 0; i <= 10; i++) {
        const subBoard = [];
        for (let j = 0; j <= 10; j++) {
            if (i === 0 && j > 0) {
                subBoard.push(coordX[j - 1]);
            } else if (i > 0 && j === 0 && i < 10) {
                subBoard.push(i + " ");
            } else if (i > 9 && j === 0) {
                subBoard.push(i);
            } else if (i === 0 && j === 0) {
                subBoard.push("  ");
            } else {
                subBoard.push(" ");
            }
        }
        board.push(subBoard);
    }
}


function printBoard(){
    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join(" | "));
    }
    console.log(
        `Destroyed Ships :  ${destroyShipsArray}`
    )
}

start();