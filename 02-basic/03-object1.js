const user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

user.greeting = function () {
    return `Hello, my name is ${this.name}`;
}

console.log(user.greeting());