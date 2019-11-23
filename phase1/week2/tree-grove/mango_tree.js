"use strict";

const FruitTree = require('./fruit_tree');

class MangoTree extends FruitTree {
    constructor(age, height, matureAge) {
        super("Mango Tree", age, height, 22, 15, matureAge);
    }
}


module.exports = MangoTree;
