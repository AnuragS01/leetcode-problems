/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (a, arr) {
    let stt = [], mpp = {};
    const n = arr.length;
    stt.push(arr[n - 1]);
    mpp[arr[n - 1]] = -1;

    for (let i = n - 2; i >= 0; i--) {
        let top = stt.at(-1);

        if (arr[i] < top) {
            mpp[arr[i]] = top;
        } else {
            while (stt.length) {
                if (arr[i] > stt.at(-1)) stt.pop();
                else {
                    mpp[arr[i]] = stt.at(-1);
                    break;
                }
                if (!stt.length) mpp[arr[i]] = -1;
            }
        }
        stt.push(arr[i]);

    }

    let ans = [];
    for (let i = 0; i < a.length; i++) {
        ans.push(mpp[a[i]]);
    }

    return ans;
};