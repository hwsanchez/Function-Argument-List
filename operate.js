//Function that recieves an operator and 2 or more operands
const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const div = (x, y) => x / y;
const mult = (x, y) => x * y;
function op(operand){
        
        const operation = ( o, x, y) => o(x,y);
        if(arguments.length < 3 ) return arguments;
        let result = arguments[1];
        for(let i = 2; i < arguments.length; i++){
           result = operation(operand, result, arguments[i]);
        }
        return result;
    }

console.log(op(sub, 100, 2, 50, 20));
console.log(op(mult, 5, 5, 10, 2));
console.log(op(div, 30, 2));
console.log(op(sum, 50, 60, 20, 7));