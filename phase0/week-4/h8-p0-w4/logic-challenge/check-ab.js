function checkAB(num) {
    // you can only write your code here!
    var indexA = [];
    var indexB = [];
    for (var i=0; i<num.length; i++){
        if (num[i] === "a"){
            indexA.push(i);
        } else if (num[i] === "b"){
            indexB.push(i);
        }
    }

    var selisih;
    for (var a=0; a<indexA.length; a++){
        for (var b=0; b<indexB.length; b++){
            selisih = (indexA[a] - indexB[b]);
            if (selisih === -4 || selisih === 4){
                return true;
            }
        }
    }

    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false