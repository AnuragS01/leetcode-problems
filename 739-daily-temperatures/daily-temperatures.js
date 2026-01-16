/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
    let stack = [];
    const n = arr.length;
    let ans = Array(n).fill(0);
    stack.push(n-1);
    ans[n-1] = 0;

    for(let i=n-2;i>=0;i--){
        while(stack.length){
            let top = stack.at(-1);

            if(arr[i] >= arr[top]){
                stack.pop();
            }else {
                ans[i] = top-i;
                break;
            }
        }
        stack.push(i);
    }

    return ans;
};