const reverseString = function(words) {
    let output = [];
    for (i = words.length - 1; i >= 0; i--) {
        output.push(words[i]);
    }
    return output.join('');
};

// Do not edit below this line
module.exports = reverseString;
