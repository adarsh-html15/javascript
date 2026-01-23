const myArray = [10, 20, 30, 40, 50];
console.log(myArray);
console.log(myArray.length);
console.log("First element:", myArray[0]);
console.log("Third element:", myArray[2]);


const newArray = new Array(5, 4, 634, 5654, 63);
console.log("New array:", newArray);

// console.log("Length of new array:", newArray.length);

// newArray[2] = 999;
// console.log("Modified new array:", newArray);
// newArray.push(777);
// console.log("After push:", newArray);
// newArray.pop();
// console.log("After pop:", newArray);
// newArray.unshift(364587)
// console.log("After unshift:", newArray); // adds element at the beginning
// newArray.shift();
// console.log("After shift:", newArray); // removes element from the beginning

console.log(newArray.slice(1, 4));

console.log(newArray.splice(2, 3, 111, 222, 333)); // removes 3 elements from index 2 and adds 111, 222, 333
console.log("After splice:", newArray);