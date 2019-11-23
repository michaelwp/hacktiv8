'use strict';

const Calculator = require("./calculator.js");

// execute function on calculator.js in here

let num = parseInt(process.argv[2]);
if (isNaN(num)) num = 0;
const calc = new Calculator(num);

console.log(
    calc
        .add(10)
        .subtract(3)
        .multiply(2)
        .divide(3)
        .square(2)
        .squareRoot()
        .countCircleArea()
        .res
);
