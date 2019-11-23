'use strict';

class Calculator {
    //write your code here
    constructor(num) {
        this._res = num;
    }

    add(addNum) {
        this._res += addNum;
        return this;
    }

    subtract(subNum) {
        this._res -= subNum;
        return this;
    }

    multiply(mulNum) {
        this._res *= mulNum;
        return this;
    }

    divide(divNum) {
        this._res /= divNum;
        return this;
    }

    square(pow) {
        this._res = Math.pow(this._res, pow);
        return this
    }

    squareRoot() {
        this._res = Math.sqrt(this._res);
        return this
    }

    pi(){
        return Math.PI;
    }

    countCircleArea() {
        this._res = this.pi() * Math.pow(this._res, 2);
        return this
    }

    get res(){
        return this._res;
    }
}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */


module.exports = Calculator;
