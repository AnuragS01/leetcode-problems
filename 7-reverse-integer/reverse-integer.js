/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = Math.abs(x), rev = 0;

    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }

    rev = x < 0 ? -rev : rev;

    const limit = Math.pow(2, 31);
    if (rev < -limit || rev > limit - 1) return 0;

    return rev;
};