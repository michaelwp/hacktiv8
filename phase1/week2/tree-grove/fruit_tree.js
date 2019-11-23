'use strict';

const Fruit = require('./fruit');

class FruitTree {
    // Initialize a new FruitTree
    constructor(name, age, height, ageLimit, ageHeightLimit, matureAge) {
        this._name = name;
        this._age = age;
        this._height = height;
        this._fruits = [];
        this._harvested = null;
        this._healthStatus = true;
        this._ageLimit = ageLimit;
        this._ageHeightLimit = ageHeightLimit;
        this._matureAge = matureAge;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get height() {
        return `${this._height.toFixed(1)} m`;
    }

    get fruits() {
        return this._fruits
    }

    get healthStatus() {
        return this._healthStatus
    }

    get harvested() {
        return this._harvested
    }

    get ageLimit() {
        return this._ageLimit;
    }

    get matureAge() {
        return this._matureAge;
    }

    // Get some fruits
    harvest() {
        let good = 0;
        let bad = 0;

        this._fruits.forEach((fruit) => {
            if (fruit._quality === 'good') {
                good++;
            } else {
                bad++
            }
        });
        this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`;
    }

    grow() {
        const treeStack = Math.random();
        if (this._age >= this._ageLimit - 1) {
            this._healthStatus = false
        }
        this._age++;
        if (this._age <= this._ageHeightLimit) {
            this._height += treeStack;
        }
    }
}

module.exports = FruitTree;