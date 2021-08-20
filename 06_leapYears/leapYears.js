const leapYears = function(i) {
    if ( i % 400 === 0){
        if ( i % 4 === 0){
            return true
        }
    }else{
        if ( i % 4 === 0 && i % 100 !== 0){
            return true
        }else{
            return false
        }
    }
};

module.exports = leapYears;
