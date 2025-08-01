const reverseString = function (str) {
    let newSTR = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newSTR += str.charAt(i);
    }
    return newSTR;
};

// Do not edit below this line
module.exports = reverseString;
