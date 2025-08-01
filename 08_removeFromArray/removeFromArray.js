const removeFromArray = function (ar, num, num2, num3, num4) {
    for (let i = 0; i < ar.length; i++) {

        if (ar[i] === num) {
            ar.splice(i, 1);
            i--; // Adjust index after removal
        }
        if (num2 !== undefined && ar[i] === num2) {
            ar.splice(i, 1);
            i--; // Adjust index after removal
        }
        if (num3 !== undefined && ar[i] === num3) {
            ar.splice(i, 1);
            i--; // Adjust index after removal
        }
        if (num4 !== undefined && ar[i] === num4) {
            ar.splice(i, 1);
            i--; // Adjust index after removal
        }
    }
    return ar;
};

// Do not edit below this line
module.exports = removeFromArray;
