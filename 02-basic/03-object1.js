const user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

user.greeting = function () {
    return `Hello, my name is ${this.name}`;
}

console.log(user.greeting());
const objectInObject = {
  name: "Bob",
  address: {
    city: "New York",
    zip: "10001",
    phoneNo: {
      first: 123456678,
      second: 9876543210
    }
  },
  collage: "meerut"
}

console.log(objectInObject.address.phoneNo.second);
console.log(objectInObject['address']['phoneNo']['first']);   
console.log(objectInObject.address.city);