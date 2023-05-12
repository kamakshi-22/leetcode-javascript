/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a mapping of each Roman numeral to its corresponding integer value
    const romanToIntMap = {
         'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result =0;

    for(let i=0; i<s.length ; i++){
         // Check if the current character is a subtractive case
        if(i<s.length-1 && romanToIntMap[s[i]] < romanToIntMap[s[i+1]]){
            result -= romanToIntMap[s[i]];
        }else{
            result += romanToIntMap[s[i]];
        }
    }
    return result;
};
