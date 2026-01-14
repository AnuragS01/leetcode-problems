/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (!s[left].match(/[a-zA-Z0-9]/)) left++;
        else if (!s[right].match(/[a-zA-Z0-9]/)) right--;
        else if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        else {
            left++;
            right--;
        }
    }

    return true;
};