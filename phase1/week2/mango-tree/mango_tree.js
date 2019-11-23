"use strict";

// Release 0

class MangoTree {

    // Initialize a new MangoTree
    constructor() {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._harvested = null;
        this._healthStatus = true;
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

    // Get current states here

    // Grow the tree
    grow() {
        const ageLimit = 15;
        const ageHeightLimit = 12;
        const treeStack = Math.random();

        if (this._age >= ageLimit - 1) {
            this._healthStatus = false
        }
        this._age++;
        if (this._age < ageHeightLimit) {
            this._height += treeStack;
        }
    }

    // Produce some mangoes
    produceMangoes() {
        let i = 0;
        const ageMature = 2;

        if (this._age >= ageMature) {
            let numOfFruits = Math.floor(Math.random() * 8) + 7;
            this._fruits = [];
            while (i < numOfFruits) {
                i++;
                let mangoFruit = new Mango();
                this._fruits.push(mangoFruit)
            }
        }
    }

    // Get some fruits
    harvest() {
        let good = 0;
        let bad = 0;

        this._fruits.forEach((fruit) => {
            if (fruit.quality === 'good') {
                good++;
            } else {
                bad++
            }
        });

        this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`;
    }

}

class Mango {
    // Produce a mango
    constructor() {
        this._quality = this.random();
    }

    random() {
        let val = Math.floor(Math.random() * 2);
        return ['good', 'bad'][val]
    }

    get quality() {
        return this._quality
    }
}

// Release 1
class AppleTree {

    // Initialize a new MangoTree
    constructor() {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._harvested = null;
        this._healthStatus = true;
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

    // Get current states here

    // Grow the tree
    grow() {
        const ageLimit = 17;
        const ageHeightLimit = 15;
        const treeStack = Math.random();

        if (this._age >= ageLimit - 1) {
            this._healthStatus = false
        }
        this._age++;
        if (this._age < ageHeightLimit) {
            this._height += treeStack;
        }
    }

    // Produce some apples
    produceApples() {
        let i = 0;
        const ageMature = 3;

        if (this._age >= ageMature) {
            let numOfFruits = Math.floor(Math.random() * 8) + 7;
            this._fruits = [];
            while (i < numOfFruits) {
                i++;
                let appleFruit = new Apple();
                this._fruits.push(appleFruit)
            }
        }
    }

    // Get some fruits
    harvest() {
        let good = 0;
        let bad = 0;

        this._fruits.forEach((fruit) => {
            if (fruit.quality === 'good') {
                good++;
            } else {
                bad++
            }
        });

        this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`;
    }
}

class Apple {
    // Produce an apple
    constructor() {
        this._quality = this.random();
    }

    random() {
        let val = Math.floor(Math.random() * 2);
        return ['good', 'bad'][val]
    }

    get quality() {
        return this._quality
    }
}

// Release 2
class FruitTree {

    // Initialize a new FruitTree
    constructor(ageLimit, ageHeightLimit, ageMature) {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._harvested = null;
        this._healthStatus = true;

        this._ageLimit = ageLimit;
        this._ageHeightLimit = ageHeightLimit;
        this._ageMature = ageMature;
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
        return this._ageLimit
    }

    get ageHeightLimit() {
        return this._ageHeightLimit
    }

    get ageMature() {
        return this._ageMature
    }

    set ageLimit(ageLimit) {
        this._ageLimit = ageLimit
    }

    set ageHeightLimit(ageHeightLimit) {
        this._ageHeightLimit = ageHeightLimit
    }

    set ageMature(ageMature) {
        this._ageMature = ageMature
    }

    set fruits(fruit) {
        this._fruits = fruit
    }

    // Get current states here

    // Grow the tree
    grow() {
        const treeStack = Math.random();

        if (this._age >= this._ageLimit - 1) {
            this._healthStatus = false
        }
        this._age++;
        if (this._age < this._ageHeightLimit) {
            this._height += treeStack;
        }
    }

    // Get some fruits
    harvest() {
        let good = 0;
        let bad = 0;

        this._fruits.forEach((fruit) => {
            if (fruit.quality === 'good') {
                good++;
            } else {
                bad++
            }
        });

        this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`;
    }
}

class Fruit {
    // Produce a fruit
    constructor() {
        this._quality = this.random();
    }

    random() {
        let val = Math.floor(Math.random() * 2);
        return ['good', 'bad'][val]
    }

    get quality() {
        return this._quality
    }
}

class MangoFruit extends Fruit {
}


class AppleFruit extends Fruit {
    constructor() {
        super();
        this.mengandungVitaminA = true
    }
}

class PearFruit extends Fruit {
}

class MangoTreeFruit extends FruitTree {
    constructor() {
        super(20, 17, 3);
    }

    // Produce some fruit
    produceFruit() {
        let i = 0;

        if (this.age >= this.ageMature) {
            const fruitArray = [];
            let numOfFruits = Math.floor(Math.random() * 11) + 2;
            while (i < numOfFruits) {
                i++;
                let fruit = new MangoFruit();
                fruitArray.push(fruit);
            }
            this.fruits = fruitArray;
        }
    }
}

class AppleTreeFruit extends FruitTree {
    constructor(age, height) {
        super(17, 15, 2);
    }

    // Produce some fruit
    produceFruit() {
        let i = 0;

        if (this.age >= this.ageMature) {
            const fruitArray = [];
            let numOfFruits = Math.floor(Math.random() * 9) + 6;
            while (i < numOfFruits) {
                i++;
                let fruit = new AppleFruit();
                fruitArray.push(fruit);
            }
            this.fruits = fruitArray;
        }
    }
}

class PearTreeFruit extends FruitTree {
    constructor(age, height) {
        super(26, 23, 5);
    }

    // Produce some fruit
    produceFruit() {
        let i = 0;

        if (this.age >= this.ageMature) {
            const fruitArray = [];
            let numOfFruits = Math.floor(Math.random() * 16) + 11;
            while (i < numOfFruits) {
                i++;
                let fruit = new PearFruit();
                fruitArray.push(fruit);
            }
            this.fruits = fruitArray;
        }
    }
}

// ---------------------- without parent and child class result ----------------- //

// let mangoTree = new MangoTree();
// console.log("The Mango tree is alive! :smile:");
// do {
//     mangoTree.grow();
//     mangoTree.produceMangoes();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus !== false);
// console.log("The Mango tree its end! :sad: \n");
//
// console.log("The Apple tree is alive! :smile:");
// let appleTree = new AppleTree();
// do {
//     appleTree.grow();
//     appleTree.produceApples();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus !== false);
// console.log("The Mango tree its end! :sad: \n");


// ---------------------- with parent and child class result ----------------- //

console.log("The Mango tree is alive! :smile:");
let mangoTree = new MangoTreeFruit();
do {
    mangoTree.grow();
    mangoTree.produceFruit();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus !== false);
console.log("The Mango tree its end! :sad:\n");

console.log("The Apple tree is alive! :smile:");
let appleTree = new AppleTreeFruit();
do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus !== false);
console.log("The Apple tree its end! :sad:\n");

console.log("The Pear tree is alive! :smile:");
let pearTree = new PearTreeFruit();
do {
    pearTree.grow();
    pearTree.produceFruit();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus !== false);
console.log("The Pear tree its end! :sad:\n");
