/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const sArr = s.split('');
    let left = 0, right = sArr.length - 1;
    while (left < right) {
        if (!vowels.includes(sArr[left])) {
            left++;
        } else if (!vowels.includes(sArr[right])) {
            right--;
        } else {
            //Swap the values of sArr[left] and sArr[right] using destructuring assignment
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
            left++;
            right--;
        }
    }
    return sArr.join('');

};
