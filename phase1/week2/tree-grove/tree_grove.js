const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {

    constructor() {
        this._trees = [];
    }

    inputTree(name, initAge, initHeight, matureAge, initHealthStatus) {
        let newTree = null;

        switch (name) {
            case 'MangoTree':
                newTree = new MangoTree(initAge, initHeight, matureAge);
                break;
            case 'AppleTree':
                newTree = new AppleTree(initAge, initHeight, matureAge);
                break;
            case 'PearTree':
                newTree = new PearTree(initAge, initHeight, matureAge);
                break;
        }

        if (newTree != null){
            this._trees.push(newTree);
        }
    }

    nextYear() {
        this._trees.forEach((tree) => {
            switch (tree.Name) {
                case 'Mango Tree':
                    if (tree.age >= tree.ageLimit) {
                        tree['Health Status'] = false
                    }
                    break;
                case 'Apple Tree':
                    if (tree.age >= tree.ageLimit) {
                        tree['Health Status'] = false
                    }
                    break;
                case 'Pear Tree':
                    if (tree.age >= tree.ageLimit) {
                        tree['Health Status'] = false
                    }
                    break;
            }

            if (tree.healthStatus === true) tree.grow();

        })
    }

    showAges() {
        this._trees.forEach((tree) => {
            console.log(`${tree.name} berumur ${tree.age} tahun`);
        })
    }

    showTrees() {
        console.log("List of All Trees : ");
        console.log(this._trees);
    }

    showMatureTrees() {
        console.log("List of Mature Trees : ");
        this._trees.forEach((tree) => {
            if (tree.age >= tree.matureAge && tree.healthStatus === true) {
                console.log(tree)
            }
        })
    }

    showDeadTrees() {
        console.log("List of Dead Trees : ");
        this._trees.forEach((tree) => {
            if (!tree.healthStatus) {
                console.log(tree)
            }
        })
    }

}

var grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
//grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 22, 2.4, 12, true);
grove.inputTree("AppleTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7, 2, 15, true);

// next year
let i = 0;
while (i < 1){
    grove.nextYear();
    i++;
}

// show trees ages
grove.showAges();

// show trees
grove.showTrees();

// show trees
grove.showMatureTrees();

// show trees
grove.showDeadTrees();
