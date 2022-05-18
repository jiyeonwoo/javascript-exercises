const removeFromArray = function(input, ...args) {
    function isIn(item) {
        return !args.includes(item);
    }
    let output = input.filter(isIn);
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
