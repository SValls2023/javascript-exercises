const palindromes = function (str) {
    // str = str.toLowerCase();
    // const newStr = str.match(/[a-z0-9]/g)

    // let right = newStr.length - 1;

    // for (let i = 0; i <= newStr.length / 2; i++) {
    //     if(newStr[i] != newStr[right]) {
    //         return false;
    //     }
    //     right--;
    // }
    
    // return true;

    const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return newStr.split("").reverse().join("") === newStr;
};

// Do not edit below this line
module.exports = palindromes;
