/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/*
The BigInt() method is used to convert each binary string to a big integer. The prefix 0b is added to the binary string to indicate that it is a binary number. 

This method ensures that the binary strings are not limited by the maximum value of a 32-bit integer in JavaScript as in case of parseInt.
*/

var addBinary = function(a, b) {
    const sum = BigInt('0b' + a) + BigInt('0b' + b);
    return sum.toString(2);
};
