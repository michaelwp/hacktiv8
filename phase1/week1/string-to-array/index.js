function stringToArrayy(inputStr) {
    // YOUR CODE HERE
    const strSplit = inputStr.split(",");
    const row = strSplit.length;
    const matrix = [];

    for (let r = 0; r < row; r++) {
        matrix.push(strSplit[r].split(""))
    }
    return matrix
}

console.log(stringToArrayy("aqrst,ukaei,ffooo"))