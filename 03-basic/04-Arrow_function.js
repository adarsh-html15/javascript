const user = {
    name: "Adarsh",
    price: 100,
     
    welcomeMassage: function() {
        console.log(`Welcome, ${this.name}! Your price is ${this.price}`);
       // this refers to the user object current contaxet
       console.log(this);
    }
               
};
console.log(this); // global context
// this in global context refers to the global object (window in browsers, global in Node.js)
user.welcomeMassage()
user.name = "Adarsh Kumar";
user.welcomeMassage()


// function chai() {
//     console.log(this.username); 
// }
// chai(); 

// arrow method to creat a function 
const chai = () => {
    console.log(this.username); 
}
chai();

const arrowFunction = (num1 ,num2) => { 
    return num1 + num2;
    // explicite return
}
console.log(arrowFunction(5, 10));

// implicit return
const impliciteReturn = (num1, num2) => num1 * num2;
// no return needed for single expression, it will return the result of that expression
console.log(impliciteReturn(5, 10));

                                            
