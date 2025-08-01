const sumAll = function (sNum, eNum) {
    if (Number.isInteger(sNum) === false || Number.isInteger(eNum) === false || typeof sNum !== 'number' || typeof eNum !== 'number' || sNum < 0 || eNum < 0) {
        return 'ERROR';
    }

    let sum = 0;
    if (eNum > sNum) {
        for (let i = sNum; i <= eNum; i++) {
            sum += i;
        }
    } else {
        for (let i = eNum; i <= sNum; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
