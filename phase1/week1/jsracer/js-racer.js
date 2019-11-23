'use strict';

const lineLength = process.argv[3];
const player = process.argv[2];

const players = {};

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

function start() {

    for (let i = 0; i < player; i++) {
        players[i + 1] = 0;
    }

    clearScreen();
    printBoard(lineLength);

    while (!finish()) {
        for (let player in players) {
            playersAdvance(player);
            sleep(1000);
            clearScreen();
            printBoard(lineLength);
            if (finish()) {
                console.log(winner(String.fromCharCode(Number(player)+96)));
                break;
            }
        }
    }
}

function playersAdvance(player) {
    players[player] += diceRoll();
    if (players[player] > lineLength - 1) {
        players[player] = lineLength - 1;
    }
}

function finish() {
    for (let player in players) {
        if (players[player] === lineLength - 1) {
            return true
        }
    }
    return false
}

function winner(player) {
    return `${player} is the winner`
}

function clearScreen() {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
}

function sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function printBoard() {
    const pow = powerAndObstacles()[0];
    const obs = powerAndObstacles()[1];

    for (let key in players) {
        const line = [];
        for (let i = 0; i < lineLength; i++) {
            if (i === players[key]) {
                line.push(String.fromCharCode(Number(key) + 96));
            } else if (i === pow) {
                line.push("$");
            } else if (i === obs) {
                line.push("%");
            } else {
                line.push(" ");
            }
        }
        console.log(line.join("|"));
    }
}

function powerAndObstacles(){
    const power =  Math.floor(Math.random()*lineLength);
    const obstacles =  Math.floor(Math.random()*lineLength);
    return [power, obstacles];
}

start();