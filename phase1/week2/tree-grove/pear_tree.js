"use strict";

const FruitTree = require('./fruit_tree');

class PearTree extends FruitTree {
    constructor(age, height, matureAge) {
        super("Pear Tree", age, height, 17, 13, matureAge);
    }
}


module.exports = PearTree;