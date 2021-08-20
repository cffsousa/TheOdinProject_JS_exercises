
const repeatString = function(choosenString, j) {
    if (j >= 0){
        return choosenString.repeat(j);
    } else{
        return "ERROR"
    }
};

module.exports = repeatString;
