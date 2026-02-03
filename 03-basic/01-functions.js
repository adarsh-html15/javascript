function addtwonum(a, b) {
    if (a == null || b == null) {
        return "Please provide both numbers";
        // after return no further code is executed in the function
    }
    return a + b;
}
console.log(addtwonum());
// novaluse so returns "Please provide both numbers"
console.log(addtwonum(5, 10));
// 1st
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Adarsh"));
// 2nd
function greet2(name = "adarsh") {
    return `Hello, ${name}!`;
    
}
console.log(greet2());
// it will the given default value
console.log(greet2("John"));
// it will override the default value