function checkVowels(str) {
    const vowDic = ['a', 'i', 'u', 'e', 'o'];
    let isVowel = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowDic.length; j++) {
            if (str[i].toLowerCase() === vowDic[j]) {
                isVowel++;
            }
        }
    }

    return (isVowel === str.length);
}


console.log(checkVowels('AIUO')); // true
console.log(checkVowels('OAIEk')); // false
console.log(checkVowels('oAiiU')); // true
console.log(checkVowels('zScOo')); // false