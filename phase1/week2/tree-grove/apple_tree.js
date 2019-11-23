"use strict";

const FruitTree = require('./fruit_tree');

class AppleTree extends FruitTree {
    constructor(age, height, matureAge) {
        super("Apple Tree", age, height, 25, 17, matureAge);
    }
}

module.exports = AppleTree;