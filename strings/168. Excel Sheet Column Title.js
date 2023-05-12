/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let title = '';

    while (columnNumber > 0) {
        let rem = (columnNumber - 1) % 26; // Subtract 1 to handle cases where columnNumber is a multiple of 26
        title = String.fromCharCode('A'.charCodeAt(0) + rem) + title;
        columnNumber = Math.floor((columnNumber - 1) / 26); // Subtract 1 to handle cases where columnNumber is a multiple of 26
    }

    return title;
};

/*
    
    For columnNumber = 701:
    rem = (columnNumber - 1) % 26 = (701 - 1) % 26 = 24
    title = "Y"
    columnNumber = (columnNumber - 1) / 26 = 26
    
    rem = (columnNumber - 1) % 26 = (26 - 1) % 26 = 0
    title = "AY"
    columnNumber = (columnNumber - 1) / 26 = 0
    
    The remainder of 24 corresponds to the letter "Y"
    The quotient of 26 gives us the next column number to calculate, which is 26
    
    The remainder of 0 corresponds to the letter "A"
    The quotient of 0 tells us we're done, since there are no more columns to calculate
    
    Concatenating the titles in reverse order gives us "ZY"
    
    
    
 */
