// scope in javascript

// global scope
var name = "John";

function greet() {
  // local scope
  var greeting = "Hello, " + name + "!";
  console.log(greeting);
}

greet(); // Output: Hello, John!

// console.log(greeting); // Error: greeting is not defined


// ++++++++++++
function addone(num) {
    return num + 1;
}
console.log(addone(5)); 


const addtwo = function (num) {
    return num + 2;
}
console.log(addtwo(5));