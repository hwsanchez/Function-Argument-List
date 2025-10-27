//The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments like:
// arguments[i];
// Using the arguments object, you can call a function with more arguments than it is formally declared:
function myConcat(separator){
    let result = "";
    for (let i = 1; i < arguments.length -1; i++) {
            result += arguments[i] + separator;    
    }
    return result + arguments[arguments.length - 1] + '.';
}

//You can pass any number of arguments to this function!

console.log(myConcat(" y ", "Rikiti", "Flikity", "Kothan", "Peppe"));
console.log(myConcat(", ","salt", "pepper", "parsley", "tomato", "onions"));