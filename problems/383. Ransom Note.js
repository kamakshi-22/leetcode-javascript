/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const ransomNoteArr = ransomNote.split("");
    const magazineArr = magazine.split("");

    for (let i = 0; i < ransomNoteArr.length; i++) {
        const index = magazineArr.indexOf(ransomNoteArr[i]);
        if (index === -1) {
            return false;
        } else {
            magazineArr.splice(index, 1);
        }
    }

    return true;
};
