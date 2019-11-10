function changeVocals(str) {
    //code di sini
    const abjVocal = {a: 0, i: 8, u: 20, e: 4, o: 14};
    const abj = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let strArray = str.split("");
    strArray.forEach((a, index) => {
        if (a.toLowerCase() in abjVocal) {
            if (a === a.toUpperCase()) {
                strArray[index] = abj[abjVocal[a.toLowerCase()] + 1].toUpperCase();
            } else {
                strArray[index] = abj[abjVocal[a] + 1];
            }
        }
    });
    return strArray;
}

function reverseWord(str) {
    //code di sini
    return str.reverse();
}

function setLowerUpperCase(str) {
    //code di sini
    str.forEach((n, index) => {
        if (n === n.toUpperCase()){
            str[index] = str[index].toLowerCase();
        } else {
            str[index] = str[index].toUpperCase();
        }
    });
    return str;
}

function removeSpaces(str) {
    //code di sini
    return str.join("").replace(/\s/g,'');
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
    var strVocal = changeVocals(name);
    var strReverse = reverseWord(strVocal);
    var strCase = setLowerUpperCase(strReverse);
    return removeSpaces(strCase);
}

//
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'