// immediate invoked function expressions (IIFE)
// IIFE also protect the code from polluting the globle scope
function sayMyName() {
    console.log('My name is Adarsh');
}
sayMyName();// in this we have to call the function for execution

// IIFE
(function() {
    console.log('This is an IIFE');
})();
// (;) is requird to make expression end and () is used to invoke the function immediately

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})('Adarsh'); 


