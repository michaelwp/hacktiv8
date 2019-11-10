function balikString(str){
    var w = "";
    for(var i=(str.length-1); i >= 0; i--){
        w += str[i];
    }
    return w;
}

console.log(balikString("hello world!"));