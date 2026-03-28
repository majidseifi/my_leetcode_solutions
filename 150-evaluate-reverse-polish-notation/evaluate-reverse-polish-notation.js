/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    function operate(a, b, operator) {
        if (operator == '+') return a + b;
        else if (operator == '-') return a - b;
        else if (operator == '*') return a * b;
        return Math.trunc(a / b);
    }

    const stack = [];
    for (const token of tokens) {
        if (token.length === 1 && token.charCodeAt(0) < 48) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            const operator = token;
            const resolvedAns = operate(num1, num2, operator);
            stack.push(resolvedAns);
        } else {
            stack.push(parseInt(token, 10));
        }
    }
    return stack.pop();
};