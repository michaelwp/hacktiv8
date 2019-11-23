'use strict';

const data = require("./data");
const board = [];
const wordFound = [];

class boogle {
    border = ['─────', '─────', '─────', '─────'];
    pos = [];

    constructor(input, board) {
        this.input = input;
        this.board = board;
    }

    start() {
        this.printBoard();
        if (this.wordIteration()) {
            this.markWordPos();
            wordFound.push(this.input);
        }
    }

    wordIteration() {
        for (let j = 0; j < this.input.length; j++) {
            if (!this.positionCheck(this.input[j], j)) {
                return false
            }
        }
        return true
    }


    positionCheck(char, charIndex) {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (char.toUpperCase() === this.board[i][j]) {
                    if (this.checkValidation([i, j], charIndex)) {
                        this.pos.push([i, j]);
                        return true
                    }
                }
            }
        }
        return false
    }

    checkValidation(pos, charIndex) {
        return !this.checkIfPosExist(pos) && this.checkIfCloseTo(pos, charIndex);
    }

    checkIfPosExist(pos) {
        let posJoin = pos.join("");
        for (let i = 0; i < this.pos.length; i++) {
            if (posJoin === this.pos[i].join("")) {
                return true
            }
        }
        return false
    }

    checkIfCloseTo(pos, charIndex) {
        if (charIndex > 0) {
            let index = charIndex - 1;
            if (
                // row - 1
                (this.pos[index][0] === (pos[0] - 1)) && (this.pos[index][1] === (pos[1])) ||
                (this.pos[index][0] === (pos[0] - 1)) && (this.pos[index][1] === (pos[1] - 1)) ||
                (this.pos[index][0] === (pos[0] - 1)) && (this.pos[index][1] === (pos[1] + 1)) ||

                // row + 1
                (this.pos[index][0] === (pos[0] + 1)) && (this.pos[index][1] === (pos[1])) ||
                (this.pos[index][0] === (pos[0] + 1)) && (this.pos[index][1] === (pos[1]) - 1) ||
                (this.pos[index][0] === (pos[0] + 1)) && (this.pos[index][1] === (pos[1]) + 1) ||

                // same row
                (this.pos[index][0] === pos[0]) && (this.pos[index][1] === (pos[1] + 1)) ||
                (this.pos[index][0] === pos[0]) && (this.pos[index][1] === (pos[1] - 1))
            ) {
                return true
            }
        } else if (charIndex === 0) {
            return true
        }
        return false
    }

    markWordPos() {
        for (let i = 0; i < this.pos.length; i++) {
            let char = this.board[this.pos[i][0]][this.pos[i][1]];
            this.board[this.pos[i][0]][this.pos[i][1]] = "\x1b[31m" + char + "\x1b[0m";
            this.printBoard();
        }
    }

    printBoard() {
        this.sleep(50);
        console.clear();
        console.log(`Searched word : ${this.input}`);
        console.log("\x1b[34m%s\x1b[0m", " ┌" + this.border.join("┬") + "┐");
        for (let i = 0; i < this.board.length; i++) {
            // console.log(this.board[i].join(" | "));
            console.log("\x1b[34m │  \x1b[0m" +
                this.board[i].join("\x1b[34m  │  \x1b[0m") +
                "\x1b[34m  │ \x1b[0m");
            if (i < this.board.length - 1) {
                console.log("\x1b[34m%s\x1b[0m", " ├" + this.border.join("┼") + "┤")
            }
        }
        console.log("\x1b[34m%s\x1b[0m", " └" + this.border.join("┴") + "┘");
        console.log(`words found : ${wordFound}`);
    }

    sleep = (milliseconds) => {
        let start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
}

const createBoard = () => {
    for (let i = 0; i < 4; i++) {
        const row = [];
        for (let j = 0; j < 4; j++) {
            let char = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            row.push(char);
        }
        board.push(row);
    }
};

createBoard();

for (let i = 0; i < data.length; i++) {
    const game = new boogle(data[i], board);
    game.start();
}

if (wordFound.length === 0) {
    console.log("No word found !!");
}