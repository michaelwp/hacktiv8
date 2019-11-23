const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');


console.log("The Mango tree is alive! :smile:");
let mangoTree = new MangoTree();
do {
    mangoTree.grow();
    mangoTree.produceFruit();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus !== false);
console.log("The Mango tree its end! :sad:\n");

console.log("The Apple tree is alive! :smile:");
let appleTree = new AppleTree();
do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus !== false);
console.log("The Apple tree its end! :sad:\n");

console.log("The Pear tree is alive! :smile:");
let pearTree = new PearTree();
do {
    pearTree.grow();
    pearTree.produceFruit();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus !== false);
console.log("The Pear tree its end! :sad:\n");