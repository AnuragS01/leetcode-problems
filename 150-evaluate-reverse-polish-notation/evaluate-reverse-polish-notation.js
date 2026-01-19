/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for(let i=0;i<tokens.length;i++){
        if(["+","-","*","/"].includes(tokens[i])){
            let prev1 = stack.pop();
            let prev2 = stack.pop();

            let val = eval(`${prev2} ${tokens[i]} ${prev1}`);
            stack.push(Math.trunc(val));
        }else {
            stack.push(tokens[i]);
        }
    }

    return Number(stack.pop());
};