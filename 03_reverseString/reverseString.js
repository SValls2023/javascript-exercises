const reverseString = function(strInput) {
    let reversed = '';
    for (let i = strInput.length - 1; i >= 0; i--) {
        reversed += strInput[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
