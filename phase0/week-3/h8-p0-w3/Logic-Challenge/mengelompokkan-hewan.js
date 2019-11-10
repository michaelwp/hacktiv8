function groupAnimals(animals) {
    // you can only write your code here!
    var res = [];
    var temp = [];

    animals = animals.sort();
    animals.push("");
    temp.push(animals[0]);
    for (var i=1; i < animals.length; i++){
        if (animals[i][0] !== animals[i-1][0]){
            res.push(temp);
            temp = [];
        }
        temp.push(animals[i]);
    }
    return res;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]