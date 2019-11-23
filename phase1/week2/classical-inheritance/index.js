"use strict";

class Animal {
    constructor(move, food, sound, name) {
        this._move = move;
        this._food = food;
        this._sound = sound;
        this._name = name;
        this.superPower = new SuperPower();
    }

    whoAmI(animKind) {
        console.log(`I'm ${animKind}`);
    }

    desc() {
        console.log(`${this._name} eats ${this._food}, ${this._move}, and ${this._sound}`)
    }
}

class SuperPower {
    use_laser_vision() {
        console.log("Laser Shootss : Beam !!!");
    }

    be_invisible() {
        console.log("Invisible Mode : Zap !!!");
    }
}

class Wolf extends Animal {
    constructor() {
        super('walking', 'meat', 'howling', 'Wolf');
    }


}


class Tiger extends Animal {
    constructor() {
        super('walking', 'meat', 'roaring', 'Tiger');
    }
}

class Bird extends Animal {
    constructor() {
        super('flying', 'fruit', 'tweeting', 'Bird');
    }
}

class Bat extends Animal {
    constructor() {
        super('flying', 'fruit', 'clicking', 'Bat');
    }
}


const wolfDesc = new Wolf();
wolfDesc.whoAmI('Wolf');
wolfDesc.desc();
wolfDesc.superPower.be_invisible();
console.log("");

const tigerDesc = new Tiger();
wolfDesc.whoAmI('Tiger');
tigerDesc.desc();
wolfDesc.superPower.be_invisible();
console.log("");

const birdDesc = new Bird();
wolfDesc.whoAmI('Bird');
birdDesc.desc();
wolfDesc.superPower.use_laser_vision();
console.log("");

const batDesc = new Bat();
wolfDesc.whoAmI('Bat');
batDesc.desc();
wolfDesc.superPower.use_laser_vision();
console.log("");
