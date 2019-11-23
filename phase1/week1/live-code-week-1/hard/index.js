function lompatanKuda(startPoint) {
    const abjad = [
        "A", "B", "C", "D",
        "E", "F", "G", "H",
    ];

    let x = abjad.indexOf(startPoint[0]);
    let y = startPoint[1];

    let steps = 0;
    const stepsCheck = [];

    if ((x + 2 > 8) && (y + 1 > 8 )){
        //
    }
}


console.log(lompatanKuda('C4')); // 8
console.log(lompatanKuda('G7')); // 4
console.log(lompatanKuda('A1')); // 2