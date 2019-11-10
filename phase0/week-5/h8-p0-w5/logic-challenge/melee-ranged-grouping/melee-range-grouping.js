function meleeRangedGrouping(str) {
    //your code here

    if (str.length === 0) return [];

    var splitStr = str.split(",");
    var ranged = [];
    var melee = [];

    splitStr.forEach((d, index) => {
        splitStr[index] = d.split("-");
    });

    splitStr.forEach((h) => {
        if (h[1] === "Ranged"){
            ranged.push(h[0]);
        } else {
            melee.push(h[0]);
        }
    });

    return [ranged, melee];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []