function ubahHuruf(kata) {
    // you can only write your code here!

    // define array variable of abjad
    var abjad =
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var kataIndex;
    var result = "";

    // process of transform kata
    for (var i = 0; i < kata.length; i++) {
        // find the index of each alphabet in the kata then add 1
        for (var a = 0; a < abjad.length; a++) {
            if (kata[i] === abjad[a]) {
                if (a < (abjad.length-1)){
                    kataIndex = a+1;
                } else {
                    kataIndex = 0;
                }
            }
        }
        // concatenate the found alphabet
        result += abjad[kataIndex];
    }

    // display result
    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu