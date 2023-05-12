/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = '';
    let tMap = '';

    for (let i = 0; i < s.length; i++) {
        const sChar = s.charAt(i);
        const tChar = t.charAt(i);

        const sIndex = sMap.indexOf(sChar);
        const tIndex = tMap.indexOf(tChar);

        if (sIndex !== tIndex) {
            return false;
        } else if (sIndex === -1) {
            sMap += sChar;
            tMap += tChar;
        }
    }

    return true;
};
