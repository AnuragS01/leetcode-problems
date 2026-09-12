/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    let num = x, rev = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return x == rev;
};