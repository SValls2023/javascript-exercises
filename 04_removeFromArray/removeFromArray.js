const removeFromArray = function(arr, ...args) {
    // New array to store non-args values
    let newArr = [];
    // Traverse user given array to push non-arg values to new array
    arr.forEach((item) => {
        if(!args.includes(item)) {
            newArr.push(item);
        }
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
