const fibonacci = function (num) {
    if (typeof num === 'string') {
        num = parseInt(num, 10);
    }

    if (num < 0) {
        return "OOPS";
    }

    let a = 0, b = 1, temp;

    for (let i = 0; i < num; i++) {
        temp = a;
        a = b;
        b = temp + b;
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;
