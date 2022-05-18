const reverseString = function(input) {
    if (input == "") {
        return input;
    }
    let inputArray = input.split("");
    let reversed = inputArray.reverse().join('');
    return reversed.toString();
};

// Do not edit below this line
module.exports = reverseString;
