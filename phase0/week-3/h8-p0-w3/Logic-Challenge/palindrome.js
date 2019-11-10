function palindrome(kata) {
    // you can only write your code here!
    var rev = "";

    for (var i=kata.length-1; i >= 0; i--){
        rev += kata[i];
    }

    return(rev === kata);

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false