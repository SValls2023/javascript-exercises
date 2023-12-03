const fibonacci = function(n) {
    if (Number(n) < 0) return "OOPS";

    let firstPrevious = 1;
    let secondPrevious = 0;

    for (let i = 0; i < Number(n - 1); i++) {
        let currNum = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = currNum;
    }

    return firstPrevious;

};

// Do not edit below this line
module.exports = fibonacci;
