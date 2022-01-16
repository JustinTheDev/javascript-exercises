const goldenRatio = 1.618034;
const fibonacci = function(inputNum) {
    let num = Number(inputNum);
    if (num < 0)
    {
        return "OOPS";
    }
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    for(let i = 2; i< num; i++)
    {
        fib[i] = fib[i-2]+fib[i-1];
    }
    return fib.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
