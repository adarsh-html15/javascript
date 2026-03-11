const userEmail = 'john@example.com';
if (userEmail) {
  console.log('Email is defined');
} else {
  console.log('Email is not defined');
}
if (userEmail.length == 12) {
     console.log('Email length is 12');
 }
// falsy valuse

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// true, non-zero numbers, non-empty strings, objects, arrays, functions
const userName = '';
if (userName) {
  console.log('Username is defined');
} else {
  console.log('Username is not defined');
}


// nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
const userAge = null;
const defaultAge = 18;
const age = userAge ?? defaultAge;
console.log(age); // Output: 18

// ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

// condition ? true : false
const teaPrice = 10;
const teaStatus = teaPrice < 10 ? 'Tea is cheap' : 'Tea is expensive';
console.log(teaStatus);