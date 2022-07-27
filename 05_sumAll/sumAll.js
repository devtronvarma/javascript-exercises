const sumAll = function(a, b) {
    result = 0;

    if (typeof(a) != "number" || typeof(b) != "number" || a < 0 || b < 0) {
        return 'ERROR'
    }

    else if (a >= b) {
        for (let i = b; i <= a; i++) {
            result += i;
        }
    }

    else {
        for (let i = a; i <= b; i++) {
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
