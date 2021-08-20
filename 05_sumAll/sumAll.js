const sumAll = function (k, l) {

    const sumArray = [];
    const reducer = (accumulator, curr) => accumulator + curr;
    let i = k < l ? k : l;
    let j = k > l ? k : l;
    while (i <= j) {
        sumArray.push(i);
        i++;

    }
    if (k < 0 || l < 0 || typeof k !== 'number' || typeof l !== 'number') {
        return "ERROR"
    } else {
        let finalSum = sumArray.reduce(reducer);
        return finalSum
    }
};

module.exports = sumAll;