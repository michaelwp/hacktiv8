function dictionarySort(dictionaries) {
    // your code below here...
    for (let i = 0; i < (dictionaries.length - 1); i++) {
        for (let j = 0; j < (dictionaries.length - 1) - i; j++) {
            if (dictionaries[j + 1] < dictionaries[j]) {
                let tmp = dictionaries[j];
                dictionaries[j] = dictionaries[j + 1];
                dictionaries[j + 1] = tmp;
            }
        }
    }
    return dictionaries
}

var arrOfWord1 = ['makan', 'duduk', 'tidur', 'terbang'];
console.log(dictionarySort(arrOfWord1));

var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi'];
console.log(dictionarySort(arrOfWord2));