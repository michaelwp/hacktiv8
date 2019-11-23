// Driver Code
class Eye {
    constructor() {
        this._eyeCount = 2;
    }
}

class Animal {
    constructor(name) {
        this.name = name;
        this._eye = new Eye();
        this._facingSeason = null;
        this.isActive = false;
        this._activity = null;
    }

    set facingSeason(season) {
        this._facingSeason = season;
        this.makeActivity();
    }

    makeActivity() {
        if (this._facingSeason === "bright") {
            this.isActive = true;
            this._activity = "playing";
        } else {
            this.isActive = false;
            this._activity = "warming";
        }
    }

    get activity() {
        return `${this.name} is ${this._activity}`;
    }
}

class Bird extends Animal {
    constructor() {
        super('Bird');
        this.wings = 2;
    }
}

class Tiger extends Animal {
    constructor() {
        super('Tiger');
        this.fangs = 4;
    }
}

class HoneyBear extends Animal {
    constructor() {
        super('Honey Bear');
    }

    makeActivity() {
        if (this._facingSeason === "bright") {
            this.isActive = true;
            this._activity = "climbing tree";
        } else {
            this.isActive = false;
            this._activity = "sleeping";
        }
    }
}

class Zoo {
    constructor(name) {
        this.name = name;
        this.season = 'bright';
        this.animals = [];
    }

    addAnimals(animals) {
        let animalSelect = null;
        animals.forEach((animal) => {
            switch (animal) {
                case "bird":
                    animalSelect = new Bird();
                    this.animals.push(animalSelect);
                    animalSelect.facingSeason = this.season;
                    break;
                case "tiger":
                    animalSelect = new Tiger();
                    this.animals.push(animalSelect);
                    animalSelect.facingSeason = this.season;
                    break;
                case "honeyBear":
                    animalSelect = new HoneyBear();
                    this.animals.push(animalSelect);
                    animalSelect.facingSeason = this.season;
                    break;
            }
        });
    }

    nextSeason() {
        if (this.season === 'bright') {
            this.season = 'rainy';
        } else {
            this.season = 'bright';
        }
    }

    showAnimalsActivity() {
        let animalSelect = null;
        this.animals.forEach((animal) => {
            switch (animal.name) {
                case "Bird":
                    animalSelect = new Bird();
                    animalSelect.makeActivity();
                    console.log(animalSelect.activity);
                    break;
                case "Tiger":
                    animalSelect = new Tiger();
                    animalSelect.makeActivity();
                    console.log(animalSelect.activity);
                    break;
                case "Honey Bear":
                    animalSelect = new HoneyBear();
                    animalSelect.makeActivity();
                    console.log(animalSelect.activity);
                    break;
            }
        })
    }

}

class AnimalFactory {
    static collectAnimals(arrayAnimal) {
        return arrayAnimal;
    }
}

const zoo = new Zoo('Taman Safari');
console.log(zoo);
/*
Zoo { name: 'Taman Safari', season: 'bright', animals: [] }
*/

const animals = AnimalFactory.collectAnimals(['tiger', 'honeyBear', 'bird', 'bird']);
console.log(animals[0]);


/*
Tiger {
  name: 'tiger',
  _eye: Eye { _eyeCount: 2 },
  _facingSeason: null,
  _activity: null,
  isActive: false,
  fangs: 4
}
*/

zoo.addAnimals(animals);
console.log(zoo);
/*
Zoo {
  name: 'Taman Safari',
  season: 'bright',
  animals: [
    Tiger {
      name: 'tiger',
      _eye: [Eye],
      _facingSeason: 'bright',
      _activity: 'playing',
      isActive: true,
      fangs: 4
    },
    HoneyBear {
      name: 'honeyBear',
      _eye: [Eye],
      _facingSeason: 'bright',
      _activity: 'climbing tree',
      isActive: false
    },
    Bird {
      name: 'bird',
      _eye: [Eye],
      _facingSeason: 'bright',
      _activity: 'playing',
      isActive: true,
      wings: 2
    },
    Bird {
      name: 'bird',
      _eye: [Eye],
      _facingSeason: 'bright',
      _activity: 'playing',
      isActive: true,
      wings: 2
    }
  ]
}
*/
console.log(zoo.animals[0]);
/*
Tiger {
  name: 'tiger',
  _eye: Eye { _eyeCount: 2 },
  _facingSeason: 'bright',
  _activity: 'playing',
  isActive: true,
  fangs: 4
}
*/

zoo.showAnimalsActivity();
/*
tiger is playing
honeyBear is climbing tree
bird is playing
bird is playing
*/
zoo.nextSeason();
zoo.showAnimalsActivity();
/*
tiger is warming
honeyBear is sleeping
bird is warming
bird is warming
*/


// Tunjukan hubungan-hubungan antar class yang telah kalian buat diatas:
// contoh: person <-> bioskop = aggregation
//
// Jawaban:
// <jawaban disini>
//
//