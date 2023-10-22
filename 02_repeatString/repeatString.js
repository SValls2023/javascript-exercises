const repeatString = function(repeatedVal, repetitions) {
    if (repetitions < 0) {
        return 'ERROR';
    }
    let solution = '';
    for (let i = 0; i < repetitions; i++) {
        solution += repeatedVal;
    }
    return solution;
};

// Do not edit below this line
module.exports = repeatString;
